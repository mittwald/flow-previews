import{r as h,j as e}from"./iframe-giJ3PN41.js";import{F as t}from"./FileDropZone-C1PfYNN2.js";import{S as c}from"./Section-CLnE8yB0.js";import{F as d}from"./FileCardList-DJn_6dwy.js";import{F as u}from"./FileCard-C75ER-bl.js";import{u as O,F as T,t as _}from"./Form-mzjax6uM.js";import{B as s}from"./Button-t3gsP1h6.js";import{A as b}from"./ActionGroup-CwEH48hj.js";import{Y as x,Z as k}from"./IconWarning-Dj_wwKGm.js";import{H as F}from"./Heading-GF-rSarA.js";import{F as f}from"./FileField-DwfZ6fwr.js";import{T as U}from"./Text-unBq3m4E.js";import"./IllustratedMessage-C1HwPqZm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGOqO5Az.js";import"./mergeRefs-nfw7e1Ht.js";import"./index-HnR-1Gnf.js";import"./utils-CXDqZ2sl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CPIeRDsX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DTs_WTOS.js";import"./useFocus-CuIPz-Kl.js";import"./useCollator-n7eXimmn.js";import"./context-B5VaUXEx.js";import"./useLocalizedStringFormatter-B7e_o0Dw.js";import"./Button-DJpSVAFI.js";import"./ProgressBar-B5g3Upep.js";import"./Label-BWQQ3Esr.js";import"./Hidden-DRJxhyU2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D1wL7cKS.js";import"./useFocusRing-DUik2Nk4.js";import"./useFocusable-Bp_JhFQV.js";import"./VisuallyHidden-DL0JmpvH.js";import"./ContextMenuSection-BxP3d4es.js";import"./Action-oFlNv8p8.js";import"./context-CtVI5d4l.js";import"./useStatic-BgGRa1ft.js";import"./browser-DkEs9M37.js";import"./getActionGroupSlot-DO7dNHL6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BJZav00b.js";import"./RSPContexts-D9-_jwd4.js";import"./OverlayArrow-BGGM7Kja.js";import"./useControlledState-BdipClPW.js";import"./Collection-DKY2nhBh.js";import"./CollectionBuilder-DGOIxE5b.js";import"./Separator-pxt8W_GD.js";import"./Group-CrHdP7HD.js";import"./SearchField-TlY83ID8.js";import"./FieldError-nVLUoiBd.js";import"./Form-DPXxe_7V.js";import"./useTextField-_WbwmA1r.js";import"./useFormReset-ChCBJkpa.js";import"./TextField-CJSQz5rH.js";import"./useEvent-BWSnRzjc.js";import"./SelectionManager-xGqpQwPR.js";import"./FocusScope-D6b4m46d.js";import"./ColumnLayout-BhKsZG2Y.js";import"./Avatar-CSGw_5ac.js";import"./AlertIcon-Bu46hoHj.js";import"./Image-CC5Y2b_D.js";import"./Link-B3ArSmG7.js";import"./OptionsButton-BqzzXYBx.js";import"./ButtonView-CMTHfTqq.js";import"./ContextMenuContent-BPAZwY6q.js";import"./Popover-wrThc68r.js";import"./DialogTriggerView-D_msadZI.js";import"./Switch-Cib0wmKS.js";import"./Label-DSQuszpE.js";import"./useToggleState-uqJ4V_wE.js";import"./FieldError-BA6Xibs7.js";import"./LoadingSpinner-kOBWqA9j.js";import"./Heading-CZgTbgZP.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-D-WMJ6En.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
