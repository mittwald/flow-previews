import{r as h,j as e}from"./iframe-D2buA_qM.js";import{F as t}from"./FileDropZone-PlOXhTRR.js";import{S as c}from"./Section-B24mVyfd.js";import{F as d}from"./FileCardList-BwG3eJ64.js";import{F as u}from"./FileCard-Ba2dqcSU.js";import{u as O,F as T,t as _}from"./Form-mvVWTRke.js";import{B as s}from"./Button-zVUpRv9Z.js";import{A as b}from"./ActionGroup-BnTjuqT1.js";import{Y as x,Z as k}from"./IconWarning-IOoTZAJG.js";import{H as F}from"./Heading-CBcxX6lz.js";import{F as f}from"./FileField-2goopSUg.js";import{T as U}from"./Text-yAGEZlE0.js";import"./IllustratedMessage-CjhtyT-N.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./utils-C_LZ7m3D.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BCY1tMCR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CoFh3sW6.js";import"./useFocus-1B3Rl8Uo.js";import"./useCollator-ThJgZh_Z.js";import"./context-DqOuYBdO.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./Button-U5ni6oS0.js";import"./ProgressBar-zFnSV5yo.js";import"./Label-N33FpYFY.js";import"./Hidden-avqQs3vJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIlt6lCU.js";import"./useFocusRing-k1804b6h.js";import"./useFocusable-B02zeCY6.js";import"./VisuallyHidden-CgNpbGUk.js";import"./ContextMenuSection-rnuJ58YB.js";import"./Action-DwzQTwOD.js";import"./context-BfKgyIPw.js";import"./useStatic-DUlV9yhw.js";import"./browser-CXT6LfEZ.js";import"./getActionGroupSlot-dS8ZOAQm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DvjD4YKx.js";import"./RSPContexts-BGMIawCG.js";import"./OverlayArrow-Cjyx3coH.js";import"./useControlledState-DPiym9a8.js";import"./Collection-oIfF5eYU.js";import"./CollectionBuilder-DMu4xOhO.js";import"./Separator-DEURLoXk.js";import"./Group-BFErIHGB.js";import"./SearchField-Zb9DN-44.js";import"./FieldError-B8sT_j_d.js";import"./Form-BNf6kdxI.js";import"./useTextField-e2Nm4Aw4.js";import"./useFormReset-Sc5in8RN.js";import"./TextField-BPJkVYT-.js";import"./useEvent-BqbWpWaQ.js";import"./SelectionManager-CshjmeDO.js";import"./FocusScope-D_7nktvV.js";import"./ColumnLayout-CLNzakRh.js";import"./Avatar-CJ-cBAPn.js";import"./AlertIcon-C-FImwfY.js";import"./Image-BLgokCF3.js";import"./Link-Hn79cV2K.js";import"./OptionsButton-CE3zTA0w.js";import"./ButtonView-BDU-7zRb.js";import"./ContextMenuContent-Bwl4gKA4.js";import"./Popover-Sy3WhCVG.js";import"./DialogTriggerView-DB_1VJf1.js";import"./Switch-Bf6C6eB0.js";import"./Label-BBxZTNKD.js";import"./useToggleState-DQrdv5cs.js";import"./FieldError-DDV9a_7l.js";import"./LoadingSpinner-ja7u21Ua.js";import"./Heading-BaNmqTkv.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-rwysn7dV.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
