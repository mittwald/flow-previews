import{j as e,r as k}from"./iframe-CqLmdNeC.js";import{L as s}from"./Label-B8Yu6jlZ.js";import{F as o}from"./FileField-BREwjnOa.js";import{B as t}from"./Button-Cck2R8d6.js";import{S as H}from"./Section-DeB4xJxa.js";import{F as G}from"./FieldError-BPhKkw68.js";import{F as U}from"./FieldDescription-BURpBJIt.js";import{O as q,K as w}from"./IconWarning-CMS0_eHL.js";import{u as K,F as M,t as N}from"./Form-DHIFVkVp.js";import{A as T}from"./ActionGroup-CKPFyTY5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./context-DzYatHkR.js";import"./Label-DbnvS1ga.js";import"./utils-DVF3OaDc.js";import"./Hidden-K4MIyCcS.js";import"./FormField.module-CqWyJNQI.js";import"./Form-Dz9VUwD7.js";import"./useFocus-CLcOeBIv.js";import"./useLabel-BygwjnmG.js";import"./FieldError-BRlNdIVM.js";import"./Text-BpEumjQQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DSZMysmZ.js";import"./useFocusRing-B3V5UxLb.js";import"./browser-D8TwyJaY.js";import"./Text-BZ3j-6fi.js";import"./EmulatedBoldText-EL8QFNsm.js";import"./LoadingSpinner-CTcHqu9G.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6TKDn6h.js";import"./ProgressBar-Bc_l3bRQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CKz354k3.js";import"./useFocusable-zATjwRwW.js";import"./ContextMenuSection-B-2w8ox3.js";import"./Action-CeDhk6lc.js";import"./context-BV-Ks7Oh.js";import"./useStatic-suMR32Og.js";import"./getActionGroupSlot-DLpPTNRU.js";import"./dynamic-DFe3knzM.js";import"./Popover-Cd3uYlMm.js";import"./DialogTriggerView-zx0O_dOm.js";import"./RSPContexts-BcXX2Wqq.js";import"./ClearPropsContextView-CGyUIuEX.js";import"./useControlledState-Blr5WM8A.js";import"./FocusScope-D6JShGuB.js";import"./useCollator-BJ0ATcQr.js";import"./VisuallyHidden-DFEHY8aA.js";import"./Collection-BtI4BBrq.js";import"./CollectionBuilder-BR0_mY_7.js";import"./Separator-Bx0e0X1l.js";import"./SearchField-Bt3pj5UO.js";import"./useTextField-CZX3v4eA.js";import"./useFormReset-6nvbbxGv.js";import"./TextField-lXG7M95o.js";import"./useEvent-CulDTTvx.js";import"./SelectionManager-mPjiaJaA.js";import"./Switch-DrI2kS3x.js";import"./useToggleState-fB_nzWPD.js";import"./chunk-PULGOXDA-8tYzn7uh.js";/**
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
