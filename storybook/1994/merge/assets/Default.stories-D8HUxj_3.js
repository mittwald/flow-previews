import{j as e,r as k}from"./iframe-MfQSddZq.js";import{L as s}from"./Label-B0eem2YN.js";import{F as o}from"./FileField-BvOAXBMd.js";import{B as t}from"./Button-CXZWinZX.js";import{S as H}from"./Section-BX_0tU7b.js";import{F as G}from"./FieldError-ByuGkvm6.js";import{F as U}from"./FieldDescription-4qMRsNvb.js";import{O as q,K as w}from"./IconWarning-CP6VaQZL.js";import{u as K,F as M,t as N}from"./Form-CW5P6p7s.js";import{A as T}from"./ActionGroup-CiK_Pz39.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-YGAsF_lo.js";import"./mergeRefs-D31Pk4Ta.js";import"./index-0BR1sey0.js";import"./useLocalizedStringFormatter-DuRjiXAD.js";import"./context-sxseT2gC.js";import"./Label-DLpcVX-r.js";import"./utils-CF_tf6Cs.js";import"./Hidden-DKR3rgXU.js";import"./FormField.module-CqWyJNQI.js";import"./Form-DVtgW9Vh.js";import"./useFocus-CxcaXJfN.js";import"./useLabel-BGyOt14X.js";import"./FieldError-DZKq6jul.js";import"./Text-CWf2hLST.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BQ9WJhL1.js";import"./useFocusRing-DF4UiXkf.js";import"./browser-BU-cRKf1.js";import"./Text-UwmO1_LL.js";import"./EmulatedBoldText-B3c3-PLP.js";import"./LoadingSpinner-BBIckw2_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Br-9CQSd.js";import"./ProgressBar-zSuzGCCN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bu3yAehE.js";import"./useFocusable-DPxyYzAu.js";import"./ContextMenuSection-B-AL25Gs.js";import"./Action-CY1G2yFR.js";import"./context-6MsjwYoY.js";import"./useStatic-BZhX7pn2.js";import"./getActionGroupSlot-Db9GcvAo.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BeFP_b5_.js";import"./RSPContexts-XbeDUJEH.js";import"./OverlayArrow-CjYCja9D.js";import"./useControlledState-C4XOt-mm.js";import"./Collection-DIan0_PG.js";import"./CollectionBuilder-DTZJMA-R.js";import"./Separator-CUz3MRZ1.js";import"./SearchField-D_EUMNnm.js";import"./useTextField-B4Sx1pdV.js";import"./useFormReset-DZNBd5mO.js";import"./TextField-D1Wfh07Y.js";import"./useEvent-yqplpnvs.js";import"./SelectionManager-CN4BV5dR.js";import"./useCollator-DRmYCL8E.js";import"./FocusScope-CMbYg7QE.js";import"./VisuallyHidden-Civfar1x.js";import"./chunk-PULGOXDA-8tYzn7uh.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,B,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var g,C,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,O,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,R,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,A,P;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ir=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,ir as __namedExportsOrder,tr as default};
