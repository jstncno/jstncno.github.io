import React from 'react';
import { ExclamationIcon, InformationCircleIcon } from '@heroicons/react/outline'


export interface CalloutProps {
  data?: string;
  children: React.ReactNode;
}

export enum CalloutType {
  BLOCK_QUOTE = 'BLOCK_QUOTE',
  INFO = 'INFO',
  WARN = 'WARN',
}

export default function Callout(props: CalloutProps) {
  const paragraph = React.Children.toArray(props.children).filter(x => x !== '\n')[0];

  if (!paragraph || !isReactElement(paragraph)) return;

  const index = React.Children.toArray(paragraph.props.children).findIndex(el => {
    if (typeof el !== 'string') return false;
    return !!parseCalloutType(el);
  });

  const meta = React.Children.toArray(paragraph.props.children)[index] as string;
  const callout = parseCalloutType(meta);

  const children = React.Children.toArray(paragraph.props.children).map((el, idx) => {
    if (index !== idx || typeof el !== 'string') return el;
    if (!callout) return el;
    if (index === idx) return callout.message;
  });
  const style = styleForCalloutType(callout?.callout);
  const icon = iconForCalloutType(callout?.callout);


  return (
    <div className={`${style} container flex w-[90%] mx-auto mb-7 px-6 py-4 border-l-4 border-solid`}>
      {icon &&
        <div className="descriptor pt-1 pr-5 mr-5 border-r border-solid border-gray-400">
          {icon}
        </div>
      }

      <div className="content">
        <p>
          {children}
        </p>
      </div>
    </div>
  );
}


function isReactElement(object: any): object is React.ReactElement {
  if (typeof object === 'string') return false;
  return 'props' in object;
}

function styleForCalloutType(callout?: CalloutType): string {
  switch (callout) {
    case CalloutType.WARN:
      return 'rounded-md border-yellow-600 bg-yellow-50 text-gray-900';
    case CalloutType.INFO:
      return 'rounded-md border-gray-600 bg-gray-300 text-gray-800';
    case CalloutType.BLOCK_QUOTE:
    default:
      return 'italic rounded-sm border-gray-400 bg-gray-300 text-gray-700';
  }
}

function iconForCalloutType(callout?: CalloutType): JSX.Element|null {
  switch (callout) {
    case CalloutType.WARN:
      return <ExclamationIcon className="text-yellow-600 h-6 w-6" />
    case CalloutType.INFO:
      return  <InformationCircleIcon className="h-6 w-6" />;
    case CalloutType.BLOCK_QUOTE:
    default:
      return null;
  }
}

function parseCalloutType(msg?: string): {callout: CalloutType, message: string} | undefined {
  if (!msg) return;

  const trimmed = msg.trimStart();

  if (trimmed.startsWith(CalloutType.INFO)) {
    const message = clean(trimmed.slice(CalloutType.INFO.length));
    return {callout: CalloutType.INFO, message};
  } else if (trimmed.startsWith(CalloutType.WARN)) {
    const message = clean(trimmed.slice(CalloutType.WARN.length));
    return {callout: CalloutType.WARN, message};
  }
}

function clean(message: string): string {
  const msg = message.trimStart();
  const result = msg.startsWith(':') ? msg.slice(1) : msg;
  return result.trimStart();
}
