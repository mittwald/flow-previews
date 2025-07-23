import{r as h,j as e}from"./iframe-CYUlilGp.js";import{F as t}from"./FileDropZone-CwlF5Kto.js";import{S as c}from"./Section-BJzWF4y6.js";import{F as d}from"./FileCardList-DnwPnd4_.js";import{F as u}from"./FileCard-CRqwsNOb.js";import{u as O,F as T,t as _}from"./Form-5VHA0Q5l.js";import{B as s}from"./Button-BfM0n2Gx.js";import{A as b}from"./ActionGroup-DGiDrFu2.js";import{Y as x,Z as k}from"./IconWarning-ghAEmGH8.js";import{H as F}from"./Heading-BPEr9Phm.js";import{F as f}from"./FileField-BTivLCqX.js";import{T as U}from"./Text-ot4TW2RP.js";import"./IllustratedMessage-BdLekbzG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CDe6Qqh3.js";import"./mergeRefs-R35jcO_1.js";import"./index-BQ87YLqe.js";import"./utils-IwmXOWz0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DsFZoYY-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ0P6uHm.js";import"./useFocus-6n3T7pEK.js";import"./useCollator-BxGQV5d9.js";import"./context-D26uRp-g.js";import"./useLocalizedStringFormatter-MUhpNbFs.js";import"./Button-DY4YyasG.js";import"./ProgressBar-CLAf1-ry.js";import"./Label-BzlJ5vcG.js";import"./Hidden-CtQ_5AUI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JEo6mDJS.js";import"./useFocusRing-Bl1ft2NQ.js";import"./useFocusable-hSKUHOaq.js";import"./VisuallyHidden-D7ZslAb9.js";import"./ContextMenuSection-uFKGMmAR.js";import"./Action-W129oGJ4.js";import"./context-CPlmB9Cj.js";import"./useStatic-CaXlYNsR.js";import"./browser-BP1SPJnQ.js";import"./getActionGroupSlot-QiwrXWOU.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-E3oWZOKb.js";import"./RSPContexts-8GpZLPll.js";import"./OverlayArrow-DFgxRKys.js";import"./useControlledState-D9dJQ2qs.js";import"./Collection-D4l8encG.js";import"./CollectionBuilder-B8Luejyn.js";import"./Separator-CYwUbqtz.js";import"./Input-CJk741gA.js";import"./SearchField-B0kT3X35.js";import"./FieldError-BpkjstJ1.js";import"./Form-CJHBPzNS.js";import"./Group-_cQVCYDW.js";import"./useTextField-BchAki_m.js";import"./useFormReset-BKFhzP-_.js";import"./TextField-BqCOguPh.js";import"./SelectionManager-BA-kOSfV.js";import"./useEvent-BKYwrgSI.js";import"./FocusScope-AdChhofX.js";import"./ColumnLayout-zhRhZ53N.js";import"./Avatar-DdZ5HvES.js";import"./AlertIcon-DrHQ4IYn.js";import"./Image-DhhXrGFu.js";import"./Link-Cp1bksqQ.js";import"./OptionsButton-CldJUL7w.js";import"./ButtonView-BF0NiKSL.js";import"./ContextMenuContent-Cfp3CZ9Y.js";import"./Popover-NGc5e56D.js";import"./DialogTriggerView-vjAZqBKE.js";import"./Switch-CzbDQCV5.js";import"./Label-Ciz8t2Io.js";import"./useToggleState-D-UNJhNF.js";import"./FieldError-BBFKNZH-.js";import"./LoadingSpinner-CJLXwe_9.js";import"./Heading-BcvtGSv_.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CMJy8lEl.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
