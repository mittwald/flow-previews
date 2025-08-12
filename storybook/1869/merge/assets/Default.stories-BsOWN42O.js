import{r as h,j as e}from"./iframe-qMbEE3nZ.js";import{F as t}from"./FileDropZone-CM1MyHjC.js";import{S as c}from"./Section-B89RkXKK.js";import{F as d}from"./FileCardList-CuGtYaSh.js";import{F as u}from"./FileCard-DJiXa25v.js";import{u as O,F as T,t as _}from"./Form-BMiel3I7.js";import{B as s}from"./Button-B092bVJN.js";import{A as b}from"./ActionGroup-D6mh6WLM.js";import{Y as x,Z as k}from"./IconWarning-CQwCi0eF.js";import{H as F}from"./Heading-DIXtQ1Is.js";import{F as f}from"./FileField-B1WSfr8h.js";import{T as U}from"./Text-BBRqDbdK.js";import"./IllustratedMessage-C8uyRTjW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-GFGOiqrH.js";import"./mergeRefs-BuWec918.js";import"./index-HDYuzCzu.js";import"./utils-BD_t44OF.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-cBZJFSe0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cq2dGHOX.js";import"./useFocus-DS8qI1YX.js";import"./useCollator-DOCzDbFi.js";import"./context-DPxByHJI.js";import"./useLocalizedStringFormatter-D-75WDAr.js";import"./Button-Bonbvv9K.js";import"./ProgressBar-CF9ToJta.js";import"./Label-D0MPEMQA.js";import"./Hidden-D7F7fo4_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-7HicN3cp.js";import"./useFocusRing-lD94xzjb.js";import"./useFocusable-D_wGn8G3.js";import"./VisuallyHidden-BVlRlsah.js";import"./ContextMenuSection-B2BOY5GR.js";import"./Action-DzKOjeMN.js";import"./context-DL-Maxx4.js";import"./useStatic-DJ16hY-2.js";import"./browser-CDpjXLqz.js";import"./getActionGroupSlot-BWxTvQ86.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BnaF-Tc6.js";import"./RSPContexts-CqdzRs7m.js";import"./OverlayArrow-UgIBIUFh.js";import"./useControlledState-CNYZu0wD.js";import"./Collection-BoGlwmNV.js";import"./CollectionBuilder--Vm7JqBi.js";import"./Separator-i61FpY_s.js";import"./Group-CL0zaHSQ.js";import"./SearchField-BlvkDSgb.js";import"./FieldError-BHMg81Vw.js";import"./Form-3qXBak_6.js";import"./useTextField-CGiD1Ab0.js";import"./useFormReset-D9SBe6RC.js";import"./TextField-Dz9bsQp0.js";import"./useEvent-CCJQzPdu.js";import"./SelectionManager-CTJHExhr.js";import"./FocusScope-phx_Kgk6.js";import"./ColumnLayout-CG0Mf2oq.js";import"./Avatar-Blavly8k.js";import"./AlertIcon-aVfCREOi.js";import"./Image-BAnA0ZW4.js";import"./Link-DDIebUvY.js";import"./OptionsButton-Bb-szReD.js";import"./ButtonView-zqeEKrHg.js";import"./ContextMenuContent-D_EGM2rw.js";import"./Popover-DMdY6O5S.js";import"./DialogTriggerView-uudYIBUg.js";import"./Switch-BIvOxIZO.js";import"./Label-Qwuh2gM1.js";import"./useToggleState-0TUrwCn9.js";import"./FieldError-BKpgIzk8.js";import"./LoadingSpinner-YXQaSanI.js";import"./Heading-YSxCqyos.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DSEgcFLX.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
