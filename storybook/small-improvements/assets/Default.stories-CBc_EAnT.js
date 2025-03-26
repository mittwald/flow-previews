import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BZISi7jw.js";import{F as t}from"./FileDropZone-BvkULGXE.js";import{S as c}from"./Section-Bqxa29Os.js";import{F as d}from"./FileCardList-D4PENMpZ.js";import{F as u}from"./FileCard-CxCJTmmG.js";import{u as k,F as I,t as T}from"./Form-CNaeLIL8.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-BJXlxerY.js";import{A as w}from"./ActionGroup-B_-ythaz.js";import"./IconApp-Do9-6_HN.js";import{i as x,j as W}from"./IconWarning-Dahq1OkV.js";import{H as F}from"./Heading-BkqfOpTv.js";import{F as f}from"./FileField-BKHt4aAk.js";import{T as E}from"./Text-BwURBFsG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-ZzMCVLxv.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CB_r5UQ3.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./utils-BAtcVSHo.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CxIdO6ok.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./useFocus-CGq_xkJe.js";import"./useCollator-CDl7pGf-.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./Button-Bd7GnYjT.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-AhNAqARA.js";import"./useFocusRing-D6MLu59I.js";import"./useFocusable-D8BATkaF.js";import"./VisuallyHidden-FconPwXt.js";import"./ContextMenuSection-6FJCuZh4.js";import"./Action-oPy_g2KX.js";import"./context-B15Zrh1O.js";import"./useStatic-D-e10mVk.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-CDFIfnsV.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CI6Vrv3H.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-B-bZ71PV.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-BHsfcKmd.js";import"./CollectionBuilder-C_ibKIdv.js";import"./Separator-BH0DZ6tu.js";import"./SelectionManager-DjqhJ6FU.js";import"./useEvent-0eO3yNkM.js";import"./FocusScope-FOL1CxoP.js";import"./ColumnLayout-91510yXX.js";import"./Avatar-ha9O2AR3.js";import"./react-children-utilities-fm2cgFnI.js";import"./Image-fZKjDe5a.js";import"./Link-BgVcIbAC.js";import"./Wrap-DQq6jo70.js";import"./FieldError-CH0xy9sj.js";import"./FieldError-DGtg9YPD.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-BWATc-O8.js";import"./Heading-DmITIAYD.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-CbU_Acnh.js";import"./Input-njpPCLyw.js";import"./EmulatedBoldText-BfYT5ZHF.js";const ir={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},m={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=k(),i=T();return e.jsxs(I,{form:n,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=m.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,Z,b;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const nr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Multiple,m as WithAcceptedTypes,p as WithReactHookForm,nr as __namedExportsOrder,ir as default};
