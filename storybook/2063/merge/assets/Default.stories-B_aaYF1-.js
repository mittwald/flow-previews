import{r as x,j as e}from"./iframe-CwjVVvSu.js";import{F as t}from"./FileDropZone-CCKgcBc6.js";import{S as u}from"./Section-CxEg7JTo.js";import{F}from"./FileCardList-CddJ1YQE.js";import{F as f}from"./FileCard-Ba8RGgse.js";import{u as E,F as W,t as G}from"./Form-CeAg-VEU.js";import{B as s}from"./Button-BzxBG2HJ.js";import{A as M}from"./ActionGroup-CtSc6WUI.js";import{_ as j,$ as q}from"./IconWarning-B6H6J5Pk.js";import{H as g}from"./Heading-Z1c9rlfR.js";import{F as h}from"./FileField-n5kJhBa0.js";import{T as v}from"./Text-BOmlTVxc.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-D-WepqDN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./index-Bxp7_DVb.js";import"./utils-OpG5u5ZF.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-lT5rhDYZ.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./useFocus-YxLRULIL.js";import"./useCollator-3AvnbkJz.js";import"./context-YbH8ssAd.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./Button-ClXMkmVB.js";import"./ProgressBar-QC1O3iDd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CTJZYj-E.js";import"./useFocusRing-DVoBnH5y.js";import"./useFocusable-CooOyqEQ.js";import"./VisuallyHidden-DYp4WZRH.js";import"./ContextMenuSection-BSZPjhOz.js";import"./Action-CQ8EezpL.js";import"./context-C4fo6dak.js";import"./useStatic-DG0mSv16.js";import"./browser-DnOs_TEg.js";import"./getActionGroupSlot-D-7WMSXI.js";import"./dynamic-BP9Yj9yh.js";import"./Dialog-D6Mx5C8w.js";import"./RSPContexts-C2pkpfxa.js";import"./OverlayArrow-n3jQFhGI.js";import"./useControlledState-3R78iQB5.js";import"./Collection-cKUjot9l.js";import"./CollectionBuilder-DmI3Nmaj.js";import"./context-Boi0W4no.js";import"./Separator-DgCYxSL8.js";import"./SelectionManager-BvVPZ4Sc.js";import"./useEvent-tgNtvJjt.js";import"./FocusScope-3UfsOkyw.js";import"./ColumnLayout-CNSiw8_3.js";import"./Avatar-CHpsmcJm.js";import"./AlertIcon-Cf0LkGsZ.js";import"./Image-tJyVzwG1.js";import"./Link-00PuI0Ny.js";import"./ButtonView-Cwki5m_c.js";import"./ContextMenuTriggerView-Dg97Qlim.js";import"./ContextMenuTrigger-BHfhD2yf.js";import"./OverlayTrigger-BpES57uV.js";import"./ControlledNotification-C2EFo0kV.js";import"./OverlayContextProvider-EJWOl_vr.js";import"./FieldError-XyqikU8N.js";import"./FieldError-C3URs1EZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BwQDbOwS.js";import"./Heading-oClWNrqM.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Z5AW4dUj.js";import"./Input-DebxReei.js";import"./useMakeFocusable-CgSnmY1U.js";import"./EmulatedBoldText-pbz3Nf-x.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
