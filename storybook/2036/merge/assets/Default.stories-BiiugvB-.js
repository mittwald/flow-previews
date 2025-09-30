import{j as r,r as W}from"./iframe-lUo2nGnz.js";import{L as l}from"./Label-JtAW2uUp.js";import{F as t}from"./FileField-DKnH0Bez.js";import{B as o}from"./Button-BJSwvuxb.js";import{S as _}from"./Section-BmAZdHSz.js";import{F as P}from"./FieldError-DpFF5VSh.js";import{F as H}from"./FieldDescription-Dnyf46T_.js";import{O as k,K}from"./IconWarning-BtoswtWr.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./Label-CYuE9nkF.js";import"./utils-D2KvaKmW.js";import"./Hidden-BOpFHvF6.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-DhAPE9Wk.js";import"./useFocus-C7dEKa6p.js";import"./FieldError-pxjDXQ2F.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-Dtsuwq9P.js";import"./useFocusRing-frjSVRec.js";import"./browser-BBsn6OTc.js";import"./useMakeFocusable-DZi0m29n.js";import"./Text-BGPM5sar.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Action-CDVhK15_.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./dynamic-C5kU0I4Y.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";/**
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
