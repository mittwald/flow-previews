import{j as e,r as k}from"./iframe-DcFGg16D.js";import{L as s}from"./Label-DUWIrMUF.js";import{F as o}from"./FileField-Bj3RG60G.js";import{B as t}from"./Button-DJ4LLcBR.js";import{S as H}from"./Section-Ip9PcGMQ.js";import{F as G}from"./FieldError-CkYOPuvt.js";import{F as U}from"./FieldDescription-BjLPvxW4.js";import{O as q,K as w}from"./IconWarning-CHPRxwlr.js";import{u as K,F as M,t as N}from"./Form-BsijhcD9.js";import{A as T}from"./ActionGroup-Bmsc2TXg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./context-2JOSlQoN.js";import"./Label-DA_WgLUG.js";import"./utils-MGL4-aZB.js";import"./Hidden-Cmuw7QWn.js";import"./FormField.module-CqWyJNQI.js";import"./Form-67TyawWi.js";import"./useFocus-U4AMFjB6.js";import"./useLabel-BWfTCaKH.js";import"./FieldError-Dg2s55Gd.js";import"./Text-Bo-pyWRw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cfinkx-g.js";import"./useFocusRing-C2kFO1mh.js";import"./browser-CVxrqIOh.js";import"./Text-DMVvzt3E.js";import"./EmulatedBoldText-BLYaA1Bn.js";import"./LoadingSpinner-B2KP9AW1.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-eLaBErzq.js";import"./ProgressBar-B1oFmI6J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dxku2mh7.js";import"./useFocusable-CBHGItg9.js";import"./ContextMenuSection-D_jMxJT1.js";import"./Action-BHkIIo1y.js";import"./context-DiGr7rSI.js";import"./useStatic-DiqMOEo2.js";import"./getActionGroupSlot-CBzmOk9k.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BjymA24M.js";import"./RSPContexts-BGgHSZk2.js";import"./OverlayArrow-D67G4pFu.js";import"./useControlledState-ecFtZ1Px.js";import"./Collection-DSC_s3_U.js";import"./CollectionBuilder-C1fftWwC.js";import"./Separator-RxFnsY_N.js";import"./SearchField-DOOJGDQj.js";import"./useTextField-DnoqRTqc.js";import"./useFormReset-CHCY757v.js";import"./TextField-DxEII3el.js";import"./useEvent-Ca5y4KLG.js";import"./SelectionManager-Cc_FCoHE.js";import"./useCollator-IqIPfKpf.js";import"./FocusScope-Csa5zz-0.js";import"./VisuallyHidden-MvD6uM4h.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const tr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,tr as __namedExportsOrder,or as default};
