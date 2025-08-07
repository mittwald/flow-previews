import{r as h,j as e}from"./iframe-Dykv-siI.js";import{F as t}from"./FileDropZone-XDeQJG9V.js";import{S as c}from"./Section-DnGxK03-.js";import{F as d}from"./FileCardList-CcyjZL7c.js";import{F as u}from"./FileCard-BlVVBl2o.js";import{u as O,F as T,t as _}from"./Form-BB06ej7A.js";import{B as s}from"./Button-BwJxl8P2.js";import{A as b}from"./ActionGroup-BQR0Ofpz.js";import{Y as x,Z as k}from"./IconWarning-Dqgt16D-.js";import{H as F}from"./Heading-CO9igaeZ.js";import{F as f}from"./FileField-D8OUG9RW.js";import{T as U}from"./Text-D7_Ckqho.js";import"./IllustratedMessage-CfSKJul_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bor3EKSO.js";import"./mergeRefs-D4l15LMa.js";import"./index-CUyX81Vk.js";import"./utils-B-ceMMh2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CLEeB9ax.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cl2tFDz1.js";import"./useFocus-DT_Sim8A.js";import"./useCollator-BbJwwBb8.js";import"./context-5SGg1gn7.js";import"./useLocalizedStringFormatter-CQJsBQBp.js";import"./Button-BG4LaOh8.js";import"./ProgressBar-D9jVrFgv.js";import"./Label-DDTleg66.js";import"./Hidden-B1Iw_O48.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JMB6_eRB.js";import"./useFocusRing-BLIO3-Um.js";import"./useFocusable-DsypMLKX.js";import"./VisuallyHidden-BglhDB6t.js";import"./ContextMenuSection-Lvc1Bla6.js";import"./Action-EDOdcPTi.js";import"./context-BIjwWtGw.js";import"./useStatic-DesXMpPQ.js";import"./browser-C-YjMasC.js";import"./getActionGroupSlot-BhsGjSHK.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-fv_y1U4K.js";import"./RSPContexts-D030pJdB.js";import"./OverlayArrow-NgM1lQd-.js";import"./useControlledState-C0gMHLaR.js";import"./Collection-DswZtzwx.js";import"./CollectionBuilder-BVax36LH.js";import"./Separator-CubwYYam.js";import"./Group-CHnOtxCU.js";import"./SearchField-ZKNym0UI.js";import"./FieldError-HMu3Fq7J.js";import"./Form-CjGGxOiW.js";import"./useTextField-DP0W3nYG.js";import"./useFormReset-ceBz3BPo.js";import"./TextField-Cfy1I-0m.js";import"./useEvent-qRsXeNBQ.js";import"./SelectionManager--KDKW3lV.js";import"./FocusScope-BSi0CMVM.js";import"./ColumnLayout-BXmFeNzX.js";import"./Avatar-DSBNBMz0.js";import"./AlertIcon-CVhvd_eR.js";import"./Image-BQt05b-J.js";import"./Link-DcRgdq_7.js";import"./OptionsButton-4JP_hYtn.js";import"./ButtonView-DOYZJ3TB.js";import"./ContextMenuContent-DfS8vqAX.js";import"./Popover-BQ0foQBP.js";import"./DialogTriggerView-C3VJcWUc.js";import"./Switch-D-lK1992.js";import"./Label-BoJDi_AO.js";import"./useToggleState-BHILd4M9.js";import"./FieldError-SIkWpDB2.js";import"./LoadingSpinner-C6ucKsq_.js";import"./Heading-CxkWtY7V.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CBoWsrrJ.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
