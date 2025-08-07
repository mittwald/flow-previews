import{r as h,j as e}from"./iframe-H6s4LegX.js";import{F as t}from"./FileDropZone-BLri_8BN.js";import{S as c}from"./Section-CNNQdQca.js";import{F as d}from"./FileCardList-DYeKiMRZ.js";import{F as u}from"./FileCard-CGyt6DpB.js";import{u as O,F as T,t as _}from"./Form-MK6dmpNR.js";import{B as s}from"./Button-BfyS9OW4.js";import{A as b}from"./ActionGroup-DfL0iMVB.js";import{Y as x,Z as k}from"./IconWarning-BOAgarfH.js";import{H as F}from"./Heading-40nVHR7j.js";import{F as f}from"./FileField-BLY-BrPt.js";import{T as U}from"./Text-Wzcs2ORX.js";import"./IllustratedMessage-UEX-1_VR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BSx1Qve-.js";import"./mergeRefs-DP3Z4rVS.js";import"./index-BCzbKcgZ.js";import"./utils-UMD8tMdI.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-W_tYTgvJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BPkUN2gP.js";import"./useFocus-CgMx6KCt.js";import"./useCollator-5lRk6LtQ.js";import"./context-ByOQKEDv.js";import"./useLocalizedStringFormatter-C86iIvvl.js";import"./Button-D43Lcc_s.js";import"./ProgressBar-D5gyotl2.js";import"./Label-CKpM-ud8.js";import"./Hidden-Di30YZNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B_R4nnaN.js";import"./useFocusRing-BEqBdngR.js";import"./useFocusable-C_460OjJ.js";import"./VisuallyHidden-BsO4eIaj.js";import"./ContextMenuSection-BQGVNH_Z.js";import"./Action-VE09ntJM.js";import"./context-ByVpJXr1.js";import"./useStatic-DkayqYPl.js";import"./browser-N4t9rK0r.js";import"./getActionGroupSlot-CgS0DVys.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CNl9Rue_.js";import"./RSPContexts-B4jRuJIy.js";import"./OverlayArrow-CJ9pmdXw.js";import"./useControlledState-CVjmrtmN.js";import"./Collection-C7wh_wcR.js";import"./CollectionBuilder-D60ucnzT.js";import"./Separator-BxffjzOt.js";import"./Group-Cl4o1nBF.js";import"./SearchField-DznnLjI8.js";import"./FieldError-Dt9y-hnT.js";import"./Form-DQJn-VxA.js";import"./useTextField-D6v9RXcK.js";import"./useFormReset-iDdXzUQ2.js";import"./TextField-2cDCflSd.js";import"./useEvent-B4EMUzkK.js";import"./SelectionManager-CXLxGtrQ.js";import"./FocusScope-BRfTPPDJ.js";import"./ColumnLayout-BWV4uLVz.js";import"./Avatar-7PnM_Pke.js";import"./AlertIcon-CAoFlRiL.js";import"./Image-BRuFC_NX.js";import"./Link-BJVPKwIs.js";import"./OptionsButton-p13OipRP.js";import"./ButtonView-C42CIbnH.js";import"./ContextMenuContent-mmqaXj_m.js";import"./Popover-By6BH1UV.js";import"./DialogTriggerView-D6-ZN5ak.js";import"./Switch-1wAjaBl4.js";import"./Label-BPnhZAtM.js";import"./useToggleState-qYn3A5Oh.js";import"./FieldError-HR0koHM9.js";import"./LoadingSpinner-BtBwTXqe.js";import"./Heading-DpGChV-N.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CuIAJdmv.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
