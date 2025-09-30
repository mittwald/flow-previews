import{r as x,j as e}from"./iframe-BkQEXHdV.js";import{F as t}from"./FileDropZone-DzfFSZ5x.js";import{S as u}from"./Section-FKwjM1dg.js";import{F}from"./FileCardList-DFZ05O53.js";import{F as f}from"./FileCard-B-eUDwEz.js";import{u as E,F as W,t as G}from"./Form-DpSOJqhG.js";import{B as s}from"./Button-Pi6ts98U.js";import{A as M}from"./ActionGroup-kwwJbAoN.js";import{_ as j,$ as q}from"./IconWarning-Bhg2W068.js";import{H as g}from"./Heading-CFJEQMAA.js";import{F as h}from"./FileField-DRBVMJAG.js";import{T as v}from"./Text-waR3uY_i.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BMgU-oy8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGcDvaD0.js";import"./mergeRefs-CrNR4Adf.js";import"./index-NrWjSaDr.js";import"./utils-vh8nJaNh.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-vqf5-lqk.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B9G_gEh3.js";import"./useFocus-DvrdYcoe.js";import"./useCollator-CckG7hwg.js";import"./context-DYNAGC-2.js";import"./useLocalizedStringFormatter-C-gsK0Kk.js";import"./Button-U99YD9dQ.js";import"./ProgressBar-BZ-kanOy.js";import"./Label-CmAFKzLd.js";import"./Hidden-B12OlcMW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CS8Sp9_K.js";import"./useFocusRing-DgjuUHXy.js";import"./useFocusable-E_oKRPWi.js";import"./VisuallyHidden-BJPXQOEU.js";import"./ContextMenuSection-fPmGy5Mt.js";import"./Action-ZxRK_-5p.js";import"./context-D6bN450f.js";import"./useStatic-D2LoWVgv.js";import"./browser-T6JBIPNk.js";import"./getActionGroupSlot-rKcLr1EF.js";import"./dynamic-BBWe3ygL.js";import"./Popover-8rOZkqNf.js";import"./DialogTriggerView-wkk6S007.js";import"./RSPContexts-BoauDkAB.js";import"./ClearPropsContextView-DluELhC2.js";import"./useControlledState-DaeuqNOc.js";import"./FocusScope-1Unh1ODV.js";import"./Collection-41evgXm1.js";import"./CollectionBuilder-CMEP5N_o.js";import"./context-Df1kKepL.js";import"./Separator-ITSOrukA.js";import"./SelectionManager-B2eDCuA_.js";import"./useEvent-XpLfJ4Ej.js";import"./Switch-BbY-iNWo.js";import"./Label-DCwzji4R.js";import"./useToggleState-D586bBrY.js";import"./useFormReset-C2GAx1Zc.js";import"./ColumnLayout-CTywkdvF.js";import"./Avatar-Bj6ajmX2.js";import"./AlertIcon-D9EY3MhT.js";import"./Image-D8jvNHY1.js";import"./Link-C1KcylOI.js";import"./ButtonView-doX-a1tA.js";import"./ContextMenuTriggerView-Bu_lfFL8.js";import"./FieldError-1DZO4FvY.js";import"./FieldError-DGWLCZ3i.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BoU0TUya.js";import"./Heading-BV1AUrOJ.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-O3WohNjc.js";import"./Input-B_J8uYe3.js";import"./EmulatedBoldText-DAPjbogn.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
