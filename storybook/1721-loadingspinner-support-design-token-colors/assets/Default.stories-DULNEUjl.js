import{r as h,j as e}from"./iframe-D5s8HkwO.js";import{F as t}from"./FileDropZone-TZD1SeW-.js";import{S as c}from"./Section-BiTnh_UT.js";import{F as d}from"./FileCardList-dFu0gfuh.js";import{F as u}from"./FileCard-DJB5Bo9Q.js";import{u as O,F as T,t as _}from"./Form-BQ2HFYsX.js";import{B as s}from"./Button-BqPne1ar.js";import{A as b}from"./ActionGroup-BamI91_B.js";import{Y as x,Z as k}from"./IconWarning-BXD0iv1k.js";import{H as F}from"./Heading-8TwYnZEu.js";import{F as f}from"./FileField-D20gKkE1.js";import{T as U}from"./Text-Cmu5-2wY.js";import"./IllustratedMessage-Cz4_Ivv5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./utils-CSEH-j9T.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BD_PegNR.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bmfvdk3t.js";import"./useFocus-ChgCHlwF.js";import"./useCollator-Bhx7w4gU.js";import"./context-BRoJySMC.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./Button-DfwJ262K.js";import"./ProgressBar-D_TjSuLE.js";import"./Label-DFio2qHv.js";import"./Hidden-DtltZqKg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLLKaLvj.js";import"./useFocusRing-0N6EWJVX.js";import"./useFocusable-aHoAMXnZ.js";import"./VisuallyHidden-WLO0QMJU.js";import"./ContextMenuSection-BxLe66M-.js";import"./Action--P7vblN7.js";import"./context-CrUoHIHV.js";import"./useStatic-CLN3_XSs.js";import"./browser-CypciHn-.js";import"./getActionGroupSlot-C2Wzm-yy.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BzKhW82W.js";import"./RSPContexts-BHdKUx20.js";import"./OverlayArrow-CjUQq1PN.js";import"./useControlledState-Cw_CbRo5.js";import"./Collection-BZqkTnip.js";import"./CollectionBuilder-Czv49dlB.js";import"./Separator-DaEegn0m.js";import"./Input-3Yn7tMQf.js";import"./SearchField-8k7gExLP.js";import"./FieldError-ZxKBib3w.js";import"./Form-DSTVN1kq.js";import"./Group-DmJZ2m4p.js";import"./useTextField-BHSza5rw.js";import"./useFormReset-CQNUsXCF.js";import"./TextField-Cuvjdg2-.js";import"./SelectionManager-DA0jAVfs.js";import"./useEvent-D5-EaqKz.js";import"./FocusScope-DbtYTQ61.js";import"./ColumnLayout-BAadG1ef.js";import"./Avatar-Clxm85AX.js";import"./AlertIcon-DwdkSEzp.js";import"./Image-fCgFQaiJ.js";import"./Link-CzJlPsWn.js";import"./OptionsButton-DMscB6rA.js";import"./ButtonView-C9AQ_TKN.js";import"./ContextMenuContent-7Mi_59cY.js";import"./Popover-CAQFCXP2.js";import"./DialogTriggerView-CMcgHDDU.js";import"./Switch-BWXJ4OpW.js";import"./Label-iSiMu1ip.js";import"./useToggleState-Ct81DQ_Q.js";import"./FieldError-DDxFFvpK.js";import"./LoadingSpinner-D7Ym_un6.js";import"./Heading-BFqUjvyn.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CCMYCjn2.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
