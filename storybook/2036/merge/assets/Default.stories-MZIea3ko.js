import{j as r,r as W}from"./iframe-Co5olYEg.js";import{L as l}from"./Label-BiorYBBr.js";import{F as t}from"./FileField-CcP-GTn_.js";import{B as o}from"./Button-W4WIo1el.js";import{S as _}from"./Section-DKEvIbkh.js";import{F as P}from"./FieldError-ozznJ0Nd.js";import{F as H}from"./FieldDescription-BesRHQ6n.js";import{O as k,K}from"./IconWarning-Deg5RPPa.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./context-VmB2ki6S.js";import"./Label-z037IMCX.js";import"./utils-CfsHCmXQ.js";import"./Hidden-DTncj6eg.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CpjqECXn.js";import"./useFocus-D_PcVBPO.js";import"./FieldError-Clh4ku1F.js";import"./Text-DL7aZegp.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-B4YaMKko.js";import"./useFocusRing-CNR6shO8.js";import"./browser-Lvchr8XH.js";import"./useMakeFocusable-DB3B4rem.js";import"./Text-D64yDBkh.js";import"./EmulatedBoldText-m8x9dOVA.js";import"./LoadingSpinner-CRLYV60Z.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B1uEfXYj.js";import"./ProgressBar-CLW14R0J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BWYiyAlu.js";import"./useFocusable-CeUOSLWr.js";import"./ContextMenuSection-BCeGxmuy.js";import"./Action-Cid4LteC.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./getActionGroupSlot-BPrq4YXq.js";import"./dynamic-DrcT1vJi.js";import"./Popover-PLO4F2vM.js";import"./DialogTriggerView-CesmwlI4.js";import"./RSPContexts-DTaEDLKz.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./useControlledState-BLXlsrOK.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./context-C8LB4vR8.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./useEvent-DsDRYPQb.js";import"./Switch-Djj9tj67.js";import"./useToggleState-4TXdrtqZ.js";import"./useFormReset-CgjW6y2V.js";/**
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
