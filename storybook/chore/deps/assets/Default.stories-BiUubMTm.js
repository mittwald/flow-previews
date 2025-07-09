import{r as h,j as e}from"./iframe-DdrpCK7O.js";import{F as t}from"./FileDropZone-B4hPkppv.js";import{S as c}from"./Section-B60whbJQ.js";import{F as d}from"./FileCardList-DY12-Fem.js";import{F as u}from"./FileCard-BsCKqekt.js";import{u as g,F as j,t as S}from"./Form-D3UfobUI.js";import{B as s}from"./Button-DMAlCpIp.js";import{A as C}from"./ActionGroup-CZjBKbuV.js";import{Y as x,Z as D}from"./IconWarning-lf4U_i6L.js";import{H as F}from"./Heading-B9Rdq3ni.js";import{F as f}from"./FileField-N1jpQy8M.js";import{T as y}from"./Text-CaSL42bb.js";import"./IllustratedMessage-3E69Y6Ym.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./utils-jbl8fYpp.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Diya8EQq.js";import"./filterDOMProps-CrrfCvhk.js";import"./useLabel-BGrVe235.js";import"./useFocus-DysN_qPg.js";import"./useCollator-uOsZKEYD.js";import"./context-BHbmanCt.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./Button-TD7SThT2.js";import"./ProgressBar-DX53PXke.js";import"./Label-q6ExZamY.js";import"./Hidden-YoIeoCE-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wge_TV6C.js";import"./useFocusRing-BnOgNpG6.js";import"./useFocusable-CpPH01B7.js";import"./VisuallyHidden--_7cmU_k.js";import"./ContextMenuSection-B9J-8lhi.js";import"./Action-gNhXMKos.js";import"./context-CvEBZO7B.js";import"./useStatic-BgXEq_zL.js";import"./browser-CJKA82in.js";import"./getActionGroupSlot-D7vgPX0T.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B-Srzcok.js";import"./RSPContexts-C1d3DcZT.js";import"./OverlayArrow-Igqyksxq.js";import"./useControlledState-N3OdDP8Q.js";import"./Collection-DaGxWABD.js";import"./CollectionBuilder-BFjTWE8q.js";import"./Separator-DpbYnmTZ.js";import"./Input-BQD-OzUK.js";import"./SearchField-Noy99wMh.js";import"./FieldError-ENGkQJvk.js";import"./Form-BaMTKeVV.js";import"./Group-7fH98enb.js";import"./useTextField-UqnMDVeR.js";import"./useFormReset-CJ-aoIOb.js";import"./TextField-l3Z8KRyH.js";import"./SelectionManager-D2bv-DGd.js";import"./useEvent-Bo6FRXFm.js";import"./FocusScope-DAuqHH8A.js";import"./ColumnLayout-BvS02pFt.js";import"./Avatar-BfoCuUxl.js";import"./AlertIcon-BFL41etr.js";import"./Image-CLcN0gOQ.js";import"./Link-BmC3mggo.js";import"./OptionsButton-e2Pk0DjB.js";import"./ButtonView-DiFXcBUq.js";import"./ContextMenuContent-RaZqNy2b.js";import"./Popover-BNdbeYA0.js";import"./DialogTriggerView-B77w19zZ.js";import"./Switch-BZfpQ840.js";import"./Label-icuqrMlJ.js";import"./useToggleState-Cy2JsR3y.js";import"./FieldError-CvYAv6kd.js";import"./LoadingSpinner-MRX8b_Xd.js";import"./Heading-C9nmxDWk.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BlAgkMNP.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},L=B("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(D,{}),e.jsx(F,{children:"Drop image"}),e.jsx(y,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=g(),i=S();return e.jsxs(j,{form:n,onSubmit:L,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(C,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Xe=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
