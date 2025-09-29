import{r as x,j as e}from"./iframe-CP2gb4h4.js";import{F as t}from"./FileDropZone-B59anszk.js";import{S as u}from"./Section-CWQqQqHK.js";import{F}from"./FileCardList-ehI47E8W.js";import{F as f}from"./FileCard-CNmcVxYr.js";import{u as E,F as W,t as G}from"./Form-CPdZ6NEz.js";import{B as s}from"./Button-D4XL1rEM.js";import{A as M}from"./ActionGroup-CJ9XWexY.js";import{_ as j,$ as q}from"./IconWarning-D-rMLbvq.js";import{H as g}from"./Heading-BHZCyk50.js";import{F as h}from"./FileField-FOMYMTn-.js";import{T as v}from"./Text-D1BFrV-v.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BcxGemZs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPf_B31n.js";import"./index-BSCJfbqF.js";import"./index-Cu5Se3_L.js";import"./utils-D_s8y5un.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CxBtgOGW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-INWae1Ce.js";import"./useFocus-DJT_GDyJ.js";import"./useCollator-CVHtnlLz.js";import"./context-BA56fXp2.js";import"./useLocalizedStringFormatter-JiHDNkwa.js";import"./Button-BqMMv05B.js";import"./ProgressBar-antzpYY8.js";import"./Label-683tI7vQ.js";import"./Hidden-BIuobSa8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B35msVos.js";import"./useFocusRing-B2VMeUUD.js";import"./useFocusable-B9L3OVB4.js";import"./VisuallyHidden-GZJ9Ibhy.js";import"./ContextMenuSection-DLwH6dLj.js";import"./Action-BlPiRLea.js";import"./context-DCT4qJcM.js";import"./useStatic-B6aSEDsB.js";import"./browser-Cy2PTbDb.js";import"./getActionGroupSlot-BJG8VOJK.js";import"./dynamic-BzAgy5gg.js";import"./Dialog-BATijwiU.js";import"./RSPContexts-CjMIBS3_.js";import"./OverlayArrow-DcwP4WPp.js";import"./useControlledState-4L3XIdhl.js";import"./Collection-O2YnEgLD.js";import"./CollectionBuilder-Cm1DEo3g.js";import"./context-ScZH95Xu.js";import"./Separator-DiCclCCI.js";import"./SelectionManager-Dx1qQpQA.js";import"./useEvent-rLgwngju.js";import"./FocusScope-8zrVT8FZ.js";import"./ColumnLayout-DMcP449F.js";import"./Avatar-US9YXzr0.js";import"./AlertIcon-BEfX6-8v.js";import"./Image-DTchR9zO.js";import"./Link-CILbJhld.js";import"./ButtonView-BW7lV1rS.js";import"./ContextMenuTriggerView-BvUTmfpw.js";import"./ContextMenuTrigger-CBk7wtnX.js";import"./OverlayTrigger-DMAetqx7.js";import"./ControlledNotification-DPwgQBkl.js";import"./OverlayContextProvider-BzrNIylh.js";import"./FieldError-CTYByr6I.js";import"./FieldError-DU2mNmYP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CCoJakpE.js";import"./Heading-p8z_hoTT.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-D0HOvZ_-.js";import"./Input-BVND2dLL.js";import"./EmulatedBoldText-DPtC43a-.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
