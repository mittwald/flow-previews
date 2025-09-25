import{j as e,r as k}from"./iframe-CQa7qTJa.js";import{L as s}from"./Label-DFElwRl3.js";import{F as o}from"./FileField-C5QUfzeO.js";import{B as t}from"./Button-CHgvO37v.js";import{S as H}from"./Section-zVqh_66u.js";import{F as G}from"./FieldError-j63R-YGj.js";import{F as U}from"./FieldDescription-B9BKUdu7.js";import{O as q,K as w}from"./IconWarning-CeyZIf1V.js";import{u as K,F as M,t as N}from"./Form-vko5YiGv.js";import{A as T}from"./ActionGroup-Cu-E7EJY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./context-BU9KDZsm.js";import"./Label-DUJFwkpM.js";import"./utils-cYx4gHhD.js";import"./Hidden-Xar3rui2.js";import"./FormField.module-CqWyJNQI.js";import"./Form-CF3ngYGn.js";import"./useFocus-C9JxIGDi.js";import"./useLabel-DGKdhdH_.js";import"./FieldError-D5-jV0S5.js";import"./Text-BRoIiTz6.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D-4ygLJZ.js";import"./useFocusRing-DJ1LjUwE.js";import"./browser-BhSl0yCb.js";import"./Text-CH2mDEXN.js";import"./EmulatedBoldText-Ce7b_D_t.js";import"./LoadingSpinner-DVFRCiEF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DeHwua8T.js";import"./ProgressBar-FMaJOq3V.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D-jgt3FH.js";import"./useFocusable-FCuKz-qE.js";import"./ContextMenuSection-D5Nv21jf.js";import"./Action-D-hl0RaT.js";import"./context-D_sCsAkv.js";import"./useStatic-ByirIl9X.js";import"./getActionGroupSlot-gbKAHcV0.js";import"./dynamic-RkS6HP3_.js";import"./Popover-DDG0vMkE.js";import"./DialogTriggerView-Cf-mCLAZ.js";import"./RSPContexts-C2Phcdxj.js";import"./ClearPropsContextView-CMBXwDsP.js";import"./useControlledState-CFUYHrzm.js";import"./FocusScope-C4mxiVmq.js";import"./useCollator-BHsFeSET.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./Collection-CLijKRGN.js";import"./CollectionBuilder-BuoP7Qv-.js";import"./Separator-D9m_TYOZ.js";import"./SearchField-DroG_a10.js";import"./useTextField-DOzcbfzW.js";import"./useFormReset-DY9tf8Hl.js";import"./TextField-BNBlfRPu.js";import"./useEvent-CyQldz3u.js";import"./SelectionManager-CZ4deCBD.js";import"./Switch-aLrDiBEZ.js";import"./useToggleState-DhCV0ASY.js";import"./chunk-PULGOXDA-8tYzn7uh.js";/**
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
