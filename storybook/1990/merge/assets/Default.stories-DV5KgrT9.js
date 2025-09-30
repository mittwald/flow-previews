import{j as e,r as k}from"./iframe-k0i0tSJI.js";import{L as s}from"./Label-qKeJblmJ.js";import{F as o}from"./FileField-Bcjkr688.js";import{B as t}from"./Button-oL_0-1Fa.js";import{S as H}from"./Section-Hr4HvyZZ.js";import{F as G}from"./FieldError-DmBkReI5.js";import{F as U}from"./FieldDescription-95JlyvjO.js";import{O as q,K as w}from"./IconWarning-Dg2SDivU.js";import{u as K,F as M,t as N}from"./Form-ulMUJonf.js";import{A as T}from"./ActionGroup-BFolwK6W.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./context-C6mYXPQf.js";import"./Label-CrL1n18B.js";import"./utils-BgzpsI0V.js";import"./Hidden-B4FAVo4g.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CoaqJdcD.js";import"./useFocus-rEgPF8zF.js";import"./FieldError-9szde7-f.js";import"./Text-BxPl3Uwa.js";import"./filterDOMProps-CghfNOdR.js";import"./Input-DArPZQ3a.js";import"./useFocusRing-CO9MadZb.js";import"./browser-4UXY86st.js";import"./Text-Cgxvqary.js";import"./EmulatedBoldText-DDmG2Q6m.js";import"./LoadingSpinner-DmRdTw1-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-S7ehKHFA.js";import"./ProgressBar-BxBVznBa.js";import"./useLabel-r92EfUV9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BmNwYdlA.js";import"./useFocusable-B3ABF-8R.js";import"./ContextMenuSection-IOVcwMb-.js";import"./Action-rR3xN66w.js";import"./context-Cc3HDEYK.js";import"./useStatic-6jrFBcb4.js";import"./getActionGroupSlot-CCMGQIVd.js";import"./dynamic-BLAyWru4.js";import"./Popover-CS1cgM-c.js";import"./DialogTriggerView-B91ZJb8_.js";import"./RSPContexts-DMQIQMHx.js";import"./ClearPropsContextView-Br7mo-KY.js";import"./useControlledState-ydeueESl.js";import"./FocusScope-CCUvRh1k.js";import"./useCollator-CWffamPy.js";import"./VisuallyHidden-DWX3G_l5.js";import"./Collection-BePmPaDd.js";import"./CollectionBuilder-8mCwZtNW.js";import"./context-CLpMNAUD.js";import"./Separator-BiKptde_.js";import"./SelectionManager-BsMwmSFL.js";import"./useEvent-BKfze8FD.js";import"./Switch-B3sHBAbd.js";import"./useToggleState-BCbr7zxa.js";import"./useFormReset-DpoZWz7L.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,nr={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const sr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,sr as __namedExportsOrder,nr as default};
