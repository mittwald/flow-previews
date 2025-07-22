import{r as h,j as e}from"./iframe-RyyXbGrI.js";import{F as t}from"./FileDropZone-b4cfIaoX.js";import{S as c}from"./Section-CLZwWhvz.js";import{F as d}from"./FileCardList-DcqAcCtS.js";import{F as u}from"./FileCard-DRUY-Hw2.js";import{u as O,F as T,t as _}from"./Form-SW4uQAKP.js";import{B as s}from"./Button-FN0w0vAZ.js";import{A as b}from"./ActionGroup-B0It9eKr.js";import{Y as x,Z as k}from"./IconWarning-C52r753T.js";import{H as F}from"./Heading-BEXv-5jI.js";import{F as f}from"./FileField-C0hW0i9k.js";import{T as U}from"./Text-Bwgmr3xm.js";import"./IllustratedMessage-BJ1RbGWT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B1uYDNh0.js";import"./mergeRefs-TzEeC_ny.js";import"./index-CkUh_6WG.js";import"./utils-CSApR2SK.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BimzKAGJ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DfsiheSh.js";import"./useFocus-CDHSIkFG.js";import"./useCollator-Cz2D5_0V.js";import"./context-CVBx-lw8.js";import"./useLocalizedStringFormatter-D3yp90gU.js";import"./Button-BVPFu0Yj.js";import"./ProgressBar-C1MhwVHg.js";import"./Label-DyZcxK1e.js";import"./Hidden-CBQwCv0D.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BifiEpzl.js";import"./useFocusRing-Cp5tV9bB.js";import"./useFocusable-B1PzsIJa.js";import"./VisuallyHidden-BRg-FWnS.js";import"./ContextMenuSection-CAGauFWq.js";import"./Action-Dda11jpG.js";import"./context-DCO0IxwY.js";import"./useStatic-CSsf_UFn.js";import"./browser-DZnqvRXk.js";import"./getActionGroupSlot-CMWgW7VZ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Dzx6c2m8.js";import"./RSPContexts-CZzeIyng.js";import"./OverlayArrow-Dd73_Jpk.js";import"./useControlledState-BAW98GGA.js";import"./Collection-C_jXpzbR.js";import"./CollectionBuilder-BR9WT68g.js";import"./Separator-D5NfBiGb.js";import"./Input-BJStptK8.js";import"./SearchField-lGDi9OEc.js";import"./FieldError-BvyzplcM.js";import"./Form-BkhipvRR.js";import"./Group-l6ZdH-Sd.js";import"./useTextField-CBuiCA3E.js";import"./useFormReset-BKdfKWXM.js";import"./TextField-aC9_w8eq.js";import"./SelectionManager-DjIO02do.js";import"./useEvent-B55JhqGe.js";import"./FocusScope-BOeRx0u7.js";import"./ColumnLayout-DkMf6pMk.js";import"./Avatar-D9QfiFcH.js";import"./AlertIcon-BDgWHW8G.js";import"./Image-D7jVEqgg.js";import"./Link-gMoAm3oX.js";import"./OptionsButton-DOVfvGS3.js";import"./ButtonView-0AcG2Lmk.js";import"./ContextMenuContent-D_mz6HxT.js";import"./Popover-qTkiQdIC.js";import"./DialogTriggerView-B2iMm6M7.js";import"./Switch-BsGNJSX1.js";import"./Label-CFvtJK4g.js";import"./useToggleState-EtcFfuMi.js";import"./FieldError-BjHPKtj9.js";import"./LoadingSpinner-CXoKjikv.js";import"./Heading-CEV6SwLu.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BGBtIkEw.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
