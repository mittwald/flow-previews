import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as H}from"./index-BZISi7jw.js";import{L as s}from"./Label-tmENthHg.js";import{F as o}from"./FileField-BlAk21Z6.js";import{B as t}from"./Button-Bennxrpq.js";import{S as P}from"./Section-KaBDrXgb.js";import{F as R}from"./FieldError-DN68xrtP.js";import{F as k}from"./FieldDescription-iwFj4ebE.js";import{c as G,a as q}from"./IconApp-Bw6C1rcI.js";import{u as w,F as U,t as _}from"./Form-BMeWjbai.js";import{a as M}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{A as O}from"./ActionGroup-DPwAQjnB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnD-oO9S.js";import"./index-IBhSrjl6.js";import"./flowComponent-C3EXXnsB.js";import"./index-DdDGTNSf.js";import"./index-C0qn59OO.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Label-aZfeS6Au.js";import"./utils-CzVyYWZn.js";import"./Hidden-C5TwESSa.js";import"./FieldError-DoW3KOQ8.js";import"./useFocusRing-DzGSygZM.js";import"./Text-PTaPc_Ci.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-BYbhpFUc.js";import"./IconWarning-CYpqa6CU.js";import"./Wrap-DQq6jo70.js";import"./Text-BwHAtMVi.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./LoadingSpinner-By9gTf-N.js";import"./Button-DrJb4gk9.js";import"./ProgressBar-CZau9lss.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./usePress-DZCrAIzv.js";import"./ContextMenuSection-BdYSX6pi.js";import"./Action-DMh-xymt.js";import"./context-DPIhxZmd.js";import"./useStatic-CRo9aToR.js";import"./getActionGroupSlot-Bss6PZo0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-aWU289xm.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-bn_YbkxG.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-CQ_IbO82.js";import"./CollectionBuilder-DndhQU5l.js";import"./Separator-DkG5lMhT.js";import"./SelectionManager-BkpGC1Gn.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./v4-CtRu48qb.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=G("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const Ye={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=M("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(k,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(R,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(q,{children:e.jsx(z,{})})})})},d={render:r=>{const[n,a]=H.useState(null),i=n==null?void 0:n[0];return e.jsxs(P,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=w(),n=_();return e.jsx(U,{form:r,onSubmit:J,children:e.jsxs(P,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(O,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,v,B;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(B=(v=p.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var y,C,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var L,g,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Ye as default};
