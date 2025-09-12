import{j as e,r as k}from"./iframe-8yS0DUKY.js";import{L as s}from"./Label-H7IJ38Py.js";import{F as o}from"./FileField-BI1qcLNv.js";import{B as t}from"./Button-BPrvhQ-0.js";import{S as H}from"./Section-BljP8Oup.js";import{F as G}from"./FieldError-RhHTJGub.js";import{F as U}from"./FieldDescription-CoOCqsSm.js";import{O as q,K as w}from"./IconWarning-DjS1wRAW.js";import{u as K,F as M,t as N}from"./Form-9753uJXW.js";import{A as T}from"./ActionGroup-UtRkjRc9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEUWN1aw.js";import"./mergeRefs-CG3eH_pd.js";import"./index-ClxjEeHU.js";import"./useLocalizedStringFormatter-tHdZCuzA.js";import"./context-CFYUiK-W.js";import"./Label-B_LbA8zB.js";import"./utils-B2ScHvO6.js";import"./Hidden-zRhskqHJ.js";import"./FormField.module-CqWyJNQI.js";import"./Form-DKGWyNm8.js";import"./useFocus-DkhmHBNs.js";import"./useLabel-BvyXk9vA.js";import"./FieldError-BJ2z3tqj.js";import"./Text-BPTsGAku.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-AwCp0aP_.js";import"./useFocusRing-TjtiHe12.js";import"./browser-Bz8-Zkx-.js";import"./Text-DehAcE3E.js";import"./EmulatedBoldText-BYAGMbeq.js";import"./LoadingSpinner-S-O73py5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dg4_y2zD.js";import"./ProgressBar-BOZ4g-uB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDvWikHH.js";import"./useFocusable-iysSxGPp.js";import"./ContextMenuSection-tU7Dg9xe.js";import"./Action-DXjXZDHo.js";import"./context-DZ5-b8vG.js";import"./useStatic-gPbisNQz.js";import"./getActionGroupSlot-Ci8nJPI3.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DJwy3CjE.js";import"./RSPContexts-n0reoNci.js";import"./OverlayArrow-670b0n0p.js";import"./useControlledState-DCsd5L_b.js";import"./Collection-BzYqn6pP.js";import"./CollectionBuilder-B8IFPRX1.js";import"./Separator-DXkAdAs1.js";import"./SearchField-Brer819R.js";import"./useTextField-dhPJvLGy.js";import"./useFormReset-DkK4PY3M.js";import"./TextField-CYgkVBJp.js";import"./useEvent-yDY_iqnF.js";import"./SelectionManager-DhO3MBuF.js";import"./useCollator-CxnDgU4L.js";import"./FocusScope-Dlq64eOc.js";import"./VisuallyHidden-DQSGeqJd.js";/**
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
