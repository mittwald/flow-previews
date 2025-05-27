import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CgfFrydU.js";import{F as t}from"./FileDropZone-C-5ly4QJ.js";import{S as c}from"./Section-Coqp9vad.js";import{F as d}from"./FileCardList-Day4V-y-.js";import{F as u}from"./FileCard-0BaiMISd.js";import{u as b,F as I,t as T}from"./Form-BHGiHopX.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-CT6jKELJ.js";import{A as w}from"./ActionGroup-BOpkwUJI.js";import{k as x,l as W}from"./IconWarning-70jApbHx.js";import{H as F}from"./Heading-bJ8ZWrvE.js";import{F as f}from"./FileField-QYJED72n.js";import{T as E}from"./Text-9PUJLXl5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-CZlv1McF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yY6RzzUT.js";import"./mergeRefs-_uxeg_17.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./utils-DvYDvJ-W.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-1CJ30n_Q.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DP9zv8XI.js";import"./useFocus-bBgo0bKd.js";import"./useCollator-Cym9_BaK.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./Button-CY6niT9f.js";import"./ProgressBar-DuZjZRB2.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-rEv_nV0O.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./VisuallyHidden-B4AzoGqn.js";import"./ContextMenuSection-CNNj2Vix.js";import"./Action-BASfP4Hw.js";import"./context-DnKpt6Zm.js";import"./useStatic-CLm-J0DW.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-BoNoL21H.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-WcTWvLN6.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-C1erJO4A.js";import"./useControlledState-DjePt-lg.js";import"./Collection-i8EjBJSq.js";import"./CollectionBuilder-Dw9MTGx5.js";import"./Separator-CUf66PuO.js";import"./SelectionManager-CTcRB2Ps.js";import"./useEvent-DsDOr2ug.js";import"./FocusScope-BCiwkv3e.js";import"./ColumnLayout-DXDfOOj1.js";import"./Avatar-DCXoeVRE.js";import"./AlertIcon-0Mrbq7jC.js";import"./Image-DQ-87tny.js";import"./Link-C5bm18vW.js";import"./OptionsButton-D0b6La_p.js";import"./ButtonView-SJ4ZBLK3.js";import"./ContextMenuContent-B_z4t3yj.js";import"./Popover-Dr9LZuKh.js";import"./OverlayTrigger-Bwrcht6a.js";import"./DialogTriggerView-APD_Z0jH.js";import"./Switch-hEiY1pJD.js";import"./Label-Bp6Pnofu.js";import"./useToggleState-DghbFXGk.js";import"./useFormReset-BiMHJINb.js";import"./FieldError-00yIk5F2.js";import"./FieldError-DQg1rr6h.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-BHQSc97o.js";import"./Heading-BFHXViOZ.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-9a9nu2yD.js";import"./Input-Bwq1TeOx.js";import"./EmulatedBoldText-KnQ_Srvn.js";const pr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const cr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,cr as __namedExportsOrder,pr as default};
