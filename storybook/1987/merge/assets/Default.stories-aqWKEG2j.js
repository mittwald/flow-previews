import{j as e,r as k}from"./iframe-DhBjVFTT.js";import{L as s}from"./Label-CYVPNsy_.js";import{F as o}from"./FileField-KZ_S8I20.js";import{B as t}from"./Button-Dt7yciC3.js";import{S as H}from"./Section-Bi6d6L_y.js";import{F as G}from"./FieldError-B3yibmjV.js";import{F as U}from"./FieldDescription-BYEOk6pt.js";import{O as q,K as w}from"./IconWarning-BnanZbEc.js";import{u as K,F as M,t as N}from"./Form-Bdiu5ga7.js";import{A as T}from"./ActionGroup-BuAUu5gQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ut4T4mCk.js";import"./mergeRefs-DgdJvSW3.js";import"./index-CE8kWNv6.js";import"./useLocalizedStringFormatter-Dqb82j34.js";import"./context-BcZ3stI5.js";import"./Label-9p36wJlw.js";import"./utils-BiTM62RC.js";import"./Hidden-CPEF8tx-.js";import"./FormField.module-CqWyJNQI.js";import"./Form-CStdbKj5.js";import"./useFocus-Boz126Wy.js";import"./useLabel-Cy7W7M25.js";import"./FieldError-NbMb9-3J.js";import"./Text-BCOK263g.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DbR3J14H.js";import"./useFocusRing-CZOlFmxO.js";import"./browser-C93HlYrv.js";import"./Text-DF-6yo40.js";import"./EmulatedBoldText-BWS0giPu.js";import"./LoadingSpinner-HTsZz-Eh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClnqUudF.js";import"./ProgressBar-wpu_Jmey.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-IeWuLCB9.js";import"./useFocusable-t-PCv4_E.js";import"./ContextMenuSection-CT3iYxF3.js";import"./Action-D5bbeFf7.js";import"./context-DD9eHGwL.js";import"./useStatic-b8Yzhzvr.js";import"./getActionGroupSlot-C52LfH-w.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BVFVztxJ.js";import"./RSPContexts-CwPCOUNA.js";import"./OverlayArrow-CEwR5798.js";import"./useControlledState-Cf0EFMq_.js";import"./Collection-BOa2gfjn.js";import"./CollectionBuilder-C5ynp6as.js";import"./Separator-LVnLAfMb.js";import"./SearchField-o8QMGYZs.js";import"./useTextField-CmDnLbvp.js";import"./useFormReset-CLUGxJas.js";import"./TextField-BjhwsOaA.js";import"./useEvent-CK4Bm0IT.js";import"./SelectionManager-TQlp0lcm.js";import"./useCollator-Ds09yMoF.js";import"./FocusScope-Cxsex6N2.js";import"./VisuallyHidden-BaY3Aahk.js";/**
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
