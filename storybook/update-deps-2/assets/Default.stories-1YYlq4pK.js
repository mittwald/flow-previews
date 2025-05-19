import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CgfFrydU.js";import{F as t}from"./FileDropZone-wDsPUujx.js";import{S as c}from"./Section-B_P_yWD7.js";import{F as d}from"./FileCardList-CRA5DOLm.js";import{F as u}from"./FileCard-wf9NlIzc.js";import{u as b,F as I,t as T}from"./Form-5hOT6oYo.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-HNIyHWur.js";import{A as w}from"./ActionGroup-CU_DCJPO.js";import{k as x,l as W}from"./IconWarning-Dhqk9c5Q.js";import{H as F}from"./Heading-DuDnBCZR.js";import{F as f}from"./FileField-D1X6O0O-.js";import{T as E}from"./Text-DAta9oPQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-CP3FoaEt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./utils-D9H5ZYVa.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-RYc5i20l.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CVdsQLKm.js";import"./useFocus-Dz5Sgz6F.js";import"./useCollator-B5zTmuon.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./Button-C4BByqx5.js";import"./ProgressBar-BwjDzH8d.js";import"./Label-nK1nmjBx.js";import"./Hidden-DwT0szmK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress--lgM-7rV.js";import"./useFocusRing-VURPolDQ.js";import"./useFocusable-B6XldfNl.js";import"./VisuallyHidden-CNMq674x.js";import"./ContextMenuSection-D53Rz7V5.js";import"./Action-DEz0u6lN.js";import"./context-C9AG9o4h.js";import"./useStatic-_S75A7Vn.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-Q0xeGE_F.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B0vEu32W.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-DLYo5xVk.js";import"./useControlledState-YIijONQK.js";import"./Collection-DH8MVYRU.js";import"./CollectionBuilder-B62dxoFp.js";import"./Separator-CJYrkcAH.js";import"./SelectionManager-Clajy7Q-.js";import"./useEvent-CfLopXbq.js";import"./FocusScope-me2WFoLK.js";import"./ColumnLayout-aHo_Coxh.js";import"./Avatar-B4QKR0EO.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-D1Wdr6VH.js";import"./Image-DqEeHv1d.js";import"./Link-nurehqow.js";import"./OptionsButton-DZ9_24Na.js";import"./ButtonView-B-ffWesE.js";import"./ContextMenuContent-CDWda837.js";import"./Popover-Cv5CotnU.js";import"./OverlayTrigger-zrHS2epI.js";import"./DialogTriggerView-BcFm6CFN.js";import"./Switch-BuG2DC_0.js";import"./Label-BnZNwGkU.js";import"./useToggleState-CFxRzXi5.js";import"./useFormReset-wPtuGCA4.js";import"./FieldError-Dbc2xQBL.js";import"./FieldError-CYJLgZCM.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-DV38nRyp.js";import"./Heading-DDNWI995.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-BSu4mMLa.js";import"./Input-D2-OWLqW.js";import"./EmulatedBoldText-KnQ_Srvn.js";const cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var k,A,Z;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const dr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,dr as __namedExportsOrder,cr as default};
