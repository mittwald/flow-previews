import{r as h,j as e}from"./iframe-DycaE4yP.js";import{F as t}from"./FileDropZone-C2YjsG-8.js";import{S as c}from"./Section-CHnRBSdb.js";import{F as d}from"./FileCardList-BDLHe110.js";import{F as u}from"./FileCard-sElt2kwY.js";import{u as O,F as T,t as _}from"./Form-BkDchlg1.js";import{B as s}from"./Button-BWHwfPz8.js";import{A as b}from"./ActionGroup-Di5U11XN.js";import{Y as x,Z as k}from"./IconWarning-CT1lcMza.js";import{H as F}from"./Heading-Bs9zq3fb.js";import{F as f}from"./FileField-DBGvdo_I.js";import{T as U}from"./Text-D7PtYJH6.js";import"./IllustratedMessage-Q6uyIAsa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-K6I7evOF.js";import"./mergeRefs-DRF5sLLW.js";import"./index-DZjp0r4-.js";import"./utils-BKIW_WGl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Co__d8QG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dwjvyt4X.js";import"./useFocus-V6VDc_9L.js";import"./useCollator-CouMmKeo.js";import"./context-CtP3BLUn.js";import"./useLocalizedStringFormatter-D4Reb_cV.js";import"./Button-YH6NiS1R.js";import"./ProgressBar-B6sVEMf9.js";import"./Label-BzQKezRD.js";import"./Hidden-BOdEkm3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bp56TFyM.js";import"./useFocusRing-DwXXK7Ot.js";import"./useFocusable-kod0IUYw.js";import"./VisuallyHidden-BS8Lf4nY.js";import"./ContextMenuSection-DLY8Y8o7.js";import"./Action-C2FublHi.js";import"./context-D9a_udGZ.js";import"./useStatic-CVcbCwvf.js";import"./browser-BH60Xdrt.js";import"./getActionGroupSlot-D0R13xpG.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C2wfDSZ9.js";import"./RSPContexts-CBFW3KNe.js";import"./OverlayArrow-PE1jPlIu.js";import"./useControlledState-Do7JB9n2.js";import"./Collection-CWz6U0aO.js";import"./CollectionBuilder-CrmAPeoT.js";import"./Separator-Co3J7Hys.js";import"./Group-KDDOI2Xy.js";import"./SearchField-B79VrsM9.js";import"./FieldError-BPjBaqMq.js";import"./Form-BeDIwDDj.js";import"./useTextField-B1Jeh3_Y.js";import"./useFormReset-CJg24Tdt.js";import"./TextField-CUQT97wD.js";import"./useEvent-BR-ARNpt.js";import"./SelectionManager-D8Ui2ebE.js";import"./FocusScope-DfGH1q4v.js";import"./ColumnLayout-CQARhu2O.js";import"./Avatar-tLeu7wLk.js";import"./AlertIcon-DTxhqL1R.js";import"./Image-DPoh6J6u.js";import"./Link-Bd-FwcDf.js";import"./OptionsButton-BPzVpcPY.js";import"./ButtonView-DfSauOsQ.js";import"./ContextMenuContent-IVdkgLp1.js";import"./Popover-_m3qz08e.js";import"./DialogTriggerView-OJkhRApQ.js";import"./Switch-DP4ipbQW.js";import"./Label-BhJAUeA3.js";import"./useToggleState-DRzIMFT2.js";import"./FieldError-DPl0RnJm.js";import"./LoadingSpinner-DrmlO1GU.js";import"./Heading-CdNZK74X.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BQ7yahrw.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
