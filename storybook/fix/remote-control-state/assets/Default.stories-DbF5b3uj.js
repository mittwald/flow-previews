import{r as h,j as e}from"./iframe-C4UjBIAn.js";import{F as t}from"./FileDropZone-BOXvHawG.js";import{S as c}from"./Section-L9w1I3DP.js";import{F as d}from"./FileCardList-Cn4nE6ap.js";import{F as u}from"./FileCard-BI2GQMp3.js";import{u as O,F as T,t as _}from"./Form-CVaCua1H.js";import{B as s}from"./Button-5hDgeu62.js";import{A as b}from"./ActionGroup-HWwh4UB5.js";import{Y as x,Z as k}from"./IconWarning-CY0XRw6B.js";import{H as F}from"./Heading-tEwIaik0.js";import{F as f}from"./FileField-6ShYX2DM.js";import{T as U}from"./Text-Cl3jjQuQ.js";import"./IllustratedMessage-Bw8X74NK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-87DwQ7Go.js";import"./mergeRefs-COMEUDHn.js";import"./index-CmrBj9gN.js";import"./utils-BLjaUoJs.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CPgcCMNB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BsCfOrtV.js";import"./useFocus-BmYsiZmy.js";import"./useCollator-DRqhDAuW.js";import"./context-DFK0WUvU.js";import"./useLocalizedStringFormatter-Bj3RA7TV.js";import"./Button-5rCQqSRQ.js";import"./ProgressBar-BsRzG7g3.js";import"./Label-DUd9oGhN.js";import"./Hidden-DuKiE2Vy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B9Tj2Vkc.js";import"./useFocusRing-D6tBYznr.js";import"./useFocusable-DY-8mdaw.js";import"./VisuallyHidden-DfrTtOS_.js";import"./ContextMenuSection-lnUae846.js";import"./Action-DIvU2Ms_.js";import"./context-B9xA30OO.js";import"./useStatic-DYGmZoo-.js";import"./browser-DTcMqGMW.js";import"./getActionGroupSlot-Cs6H9gb3.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Tiii-4pl.js";import"./RSPContexts-CIyyPXTw.js";import"./OverlayArrow-BK55VNdR.js";import"./useControlledState-Cate5U5n.js";import"./Collection-YaGs-Nx7.js";import"./CollectionBuilder-BzI9Vgxs.js";import"./Separator-plBA_LWS.js";import"./Input-DYzTUFv2.js";import"./SearchField-BVimEZR8.js";import"./FieldError-V3TTSJrT.js";import"./Form-DZkb495z.js";import"./Group-DVLbnFER.js";import"./useTextField-CYEprWqj.js";import"./useFormReset-DguyA7pD.js";import"./TextField-_WSxaHpd.js";import"./SelectionManager-DBmgSDBD.js";import"./useEvent-tf06nvNZ.js";import"./FocusScope-BprNCpdJ.js";import"./ColumnLayout-BARAwnzs.js";import"./Avatar-Blvn4khL.js";import"./AlertIcon-BexTRgVS.js";import"./Image-C11xmyMF.js";import"./Link-BkOLogPX.js";import"./OptionsButton-C6Kvi5M1.js";import"./ButtonView-n29gH5pF.js";import"./ContextMenuContent-12lj3f42.js";import"./Popover-Dee7e1-Y.js";import"./DialogTriggerView-C4tTcH16.js";import"./Switch-WDIiN1XN.js";import"./Label-Dvf2CIG9.js";import"./useToggleState-DkhSXG62.js";import"./FieldError-CnWpy5EF.js";import"./LoadingSpinner-BzraVxPM.js";import"./Heading-DhTfsAKW.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CM9vl5us.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
