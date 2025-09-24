import{j as e,r as k}from"./iframe-upPjViUi.js";import{L as s}from"./Label-RDx-2swG.js";import{F as o}from"./FileField-CYkrUIEz.js";import{B as t}from"./Button-BdUtk4-2.js";import{S as H}from"./Section-6RmnC13-.js";import{F as G}from"./FieldError-Cn-v5KPW.js";import{F as U}from"./FieldDescription-Cq9VHaF_.js";import{O as q,K as w}from"./IconWarning-CwNATdER.js";import{u as K,F as M,t as N}from"./Form-BA8KN0Ra.js";import{A as T}from"./ActionGroup-D0ROdOJb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yJMP1aPs.js";import"./mergeRefs-q2W69vto.js";import"./index-RP-73gJI.js";import"./useLocalizedStringFormatter-BrLv4P2q.js";import"./context-DUCBVekV.js";import"./Label-VDo2pjQH.js";import"./utils-D7Ud1rY1.js";import"./Hidden-DUPaGITp.js";import"./FormField.module-CqWyJNQI.js";import"./Form-CCPP_JFl.js";import"./useFocus-CKR8Kfvk.js";import"./useLabel-Bv0sV64n.js";import"./FieldError-Dxc2xglq.js";import"./Text-CPJx-aex.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-ClmTbc4u.js";import"./useFocusRing-DBg1NGxh.js";import"./browser-BQR41_Xo.js";import"./Text-DrOfxU9W.js";import"./EmulatedBoldText-gAgggVs5.js";import"./LoadingSpinner-CzeOX1VK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CWtnBlrz.js";import"./ProgressBar-B2varhWC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-nNimJg5a.js";import"./useFocusable-D-QSeIiW.js";import"./ContextMenuSection-3Je0aaRW.js";import"./Action-Cb9jSIVt.js";import"./context-DSTBS2xh.js";import"./useStatic-BNGbJ6l6.js";import"./getActionGroupSlot-Dx3eCL3t.js";import"./dynamic-Cvppd2SX.js";import"./Popover-CM6Xbo5y.js";import"./DialogTriggerView-CYID30AX.js";import"./RSPContexts-CDfzDcm_.js";import"./ClearPropsContextView-CWLdfkB7.js";import"./useControlledState-DJQ8YErb.js";import"./FocusScope-cBvdiCGC.js";import"./useCollator-C5XQM9l2.js";import"./VisuallyHidden-svNoe17i.js";import"./Collection-C7hZcg-r.js";import"./CollectionBuilder-CvJppZRn.js";import"./Separator-NH6jHWUN.js";import"./SearchField-DoTA-SfC.js";import"./useTextField-BoNbQLwS.js";import"./useFormReset-BGI-E8mB.js";import"./TextField-DM_RTlmg.js";import"./useEvent-DEpz7Cvb.js";import"./SelectionManager-CyC5TvbY.js";import"./Switch-BhwnwwjS.js";import"./useToggleState-BeIkbzV7.js";import"./chunk-PULGOXDA-8tYzn7uh.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,ar as __namedExportsOrder,sr as default};
