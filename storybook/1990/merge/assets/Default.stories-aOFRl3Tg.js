import{r as x,j as e}from"./iframe-k0i0tSJI.js";import{F as t}from"./FileDropZone-ByKkWwGO.js";import{S as u}from"./Section-Hr4HvyZZ.js";import{F}from"./FileCardList-DCTUE-uY.js";import{F as f}from"./FileCard-BBwNNEij.js";import{u as E,F as W,t as G}from"./Form-ulMUJonf.js";import{B as s}from"./Button-oL_0-1Fa.js";import{A as M}from"./ActionGroup-BFolwK6W.js";import{_ as j,$ as q}from"./IconWarning-Dg2SDivU.js";import{H as g}from"./Heading-CnN6g1-i.js";import{F as h}from"./FileField-Bcjkr688.js";import{T as v}from"./Text-Cgxvqary.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-Ce4QE2Xe.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./utils-BgzpsI0V.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BxPl3Uwa.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-r92EfUV9.js";import"./useFocus-rEgPF8zF.js";import"./useCollator-CWffamPy.js";import"./context-C6mYXPQf.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./Button-S7ehKHFA.js";import"./ProgressBar-BxBVznBa.js";import"./Label-CrL1n18B.js";import"./Hidden-B4FAVo4g.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BmNwYdlA.js";import"./useFocusRing-CO9MadZb.js";import"./useFocusable-B3ABF-8R.js";import"./VisuallyHidden-DWX3G_l5.js";import"./ContextMenuSection-IOVcwMb-.js";import"./Action-rR3xN66w.js";import"./context-Cc3HDEYK.js";import"./useStatic-6jrFBcb4.js";import"./browser-4UXY86st.js";import"./getActionGroupSlot-CCMGQIVd.js";import"./dynamic-BLAyWru4.js";import"./Popover-CS1cgM-c.js";import"./DialogTriggerView-B91ZJb8_.js";import"./RSPContexts-DMQIQMHx.js";import"./ClearPropsContextView-Br7mo-KY.js";import"./useControlledState-ydeueESl.js";import"./FocusScope-CCUvRh1k.js";import"./Collection-BePmPaDd.js";import"./CollectionBuilder-8mCwZtNW.js";import"./context-CLpMNAUD.js";import"./Separator-BiKptde_.js";import"./SelectionManager-BsMwmSFL.js";import"./useEvent-BKfze8FD.js";import"./Switch-B3sHBAbd.js";import"./Label-qKeJblmJ.js";import"./useToggleState-BCbr7zxa.js";import"./useFormReset-DpoZWz7L.js";import"./ColumnLayout-B4E3Z2eB.js";import"./Avatar-DGhP3hPS.js";import"./AlertIcon-CorkigaR.js";import"./Image-58b1K0z2.js";import"./Link-BeuT36KM.js";import"./ButtonView-C1mR-1Lh.js";import"./ContextMenuTriggerView-g_sexhkj.js";import"./FieldError-DmBkReI5.js";import"./FieldError-9szde7-f.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DmRdTw1-.js";import"./Heading-CjvbCWNJ.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CoaqJdcD.js";import"./Input-DArPZQ3a.js";import"./EmulatedBoldText-DDmG2Q6m.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
