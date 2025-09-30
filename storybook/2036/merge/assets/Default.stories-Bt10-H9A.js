import{j as r,r as W}from"./iframe-CxmXe-_O.js";import{L as l}from"./Label-DeDEMxfU.js";import{F as t}from"./FileField-CtD56J-U.js";import{B as o}from"./Button-DVo7WD-1.js";import{S as _}from"./Section-DzvPU-TL.js";import{F as P}from"./FieldError-CSErn7mI.js";import{F as H}from"./FieldDescription-Dm0WW9cG.js";import{O as k,K}from"./IconWarning-DZNLduw-.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./Label-2vh9UW-y.js";import"./utils-Cd13syVz.js";import"./Hidden-fABZRyqD.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-D2bFAqKZ.js";import"./useFocus-BpzuXZ8X.js";import"./FieldError-D8IUoOjD.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-c2pTqiZe.js";import"./useFocusRing-D7TcncFW.js";import"./browser-fsrkaBj_.js";import"./useMakeFocusable-Doucc66J.js";import"./Text-BT2KT2kR.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIfsm19n.js";import"./useFocusable-CZtfPtCy.js";import"./ContextMenuSection-qRzHMhAk.js";import"./Action-CKP9QlTZ.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./dynamic-5AyxyhbL.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],N=k("outline","paperclip","Paperclip",M),Qr={title:"Form Controls/FileField",component:t,render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(t,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(H,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(P,{children:"File too large"})]})},p={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(K,{children:r.jsx(N,{})})})})},c={render:e=>{const[m,R]=W.useState(null),d=m==null?void 0:m[0];return r.jsxs(_,{children:[r.jsxs(t,{...e,isInvalid:!0,onChange:R,children:[r.jsx(l,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),d==null?void 0:d.name]})}};var u,F,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,v,g;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,B,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,b,L;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(b=p.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var E,D,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const Tr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Tr as __namedExportsOrder,Qr as default};
