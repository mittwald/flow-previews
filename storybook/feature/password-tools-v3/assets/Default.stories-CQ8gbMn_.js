import{r as h,j as e}from"./iframe-BBx9-gCC.js";import{F as t}from"./FileDropZone-mEANZBqQ.js";import{S as c}from"./Section-BTEfNwGw.js";import{F as d}from"./FileCardList-BdMSIKGN.js";import{F as u}from"./FileCard-BAm2L4Xb.js";import{u as O,F as T,t as _}from"./Form-kHJ7jlTR.js";import{B as s}from"./Button-Ddotms0d.js";import{A as b}from"./ActionGroup-OngeyNPY.js";import{Y as x,Z as k}from"./IconWarning-47GPuUwW.js";import{H as F}from"./Heading-CjnzzP7a.js";import{F as f}from"./FileField-C8Vllajf.js";import{T as U}from"./Text-BRZqhCt6.js";import"./IllustratedMessage-CTAFEuzg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJQMRhIz.js";import"./mergeRefs-CjwhAStn.js";import"./index-CiDUljAk.js";import"./utils-SrU--Gh3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text--Ew1YFd1.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CF_pOETX.js";import"./useFocus-BXsHwCAW.js";import"./useCollator-CBTsDb_F.js";import"./context-Ck7bCMhf.js";import"./useLocalizedStringFormatter-BhZ19fOj.js";import"./Button-L3SI-iJl.js";import"./ProgressBar-CJ4YAGIN.js";import"./Label-CVor_bqX.js";import"./Hidden-BTXZmZLy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dpgdsh2n.js";import"./useFocusRing-D6klBOWk.js";import"./useFocusable-D4Fl883K.js";import"./VisuallyHidden-DCQ3C4tW.js";import"./ContextMenuSection-BFwPoVa8.js";import"./Action-BVJDTfB3.js";import"./context-Dom9sQ0K.js";import"./useStatic-BS_If2Fg.js";import"./browser-Bo5IRxBw.js";import"./getActionGroupSlot-C2w1KC4o.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-H4IcaOME.js";import"./RSPContexts-JH7zjLDh.js";import"./OverlayArrow-B_GGjq9s.js";import"./useControlledState-DddH35UQ.js";import"./Collection-cumDjP4P.js";import"./CollectionBuilder-B9aud2Z5.js";import"./Separator-BwGnbFHF.js";import"./Input-BKE4e8rI.js";import"./SearchField-CFDyyBZS.js";import"./FieldError-CQ-c_qp9.js";import"./Form-DewizsXc.js";import"./Group-BE3jiUC2.js";import"./useTextField-Sw__XDSo.js";import"./useFormReset-dy85Q4T2.js";import"./TextField-D1wRIDn_.js";import"./SelectionManager-Jj460orM.js";import"./useEvent-CbTJhmHg.js";import"./FocusScope-CSSHoYlT.js";import"./ColumnLayout-Cd95jzbZ.js";import"./Avatar-CbYPGcOt.js";import"./AlertIcon-CbYeSYGw.js";import"./Image-Dat152dN.js";import"./Link-2j6OoWyU.js";import"./OptionsButton-i_rjVb7b.js";import"./ButtonView-V0Ilbtro.js";import"./ContextMenuContent-BXEWctvn.js";import"./Popover-CjCquK7b.js";import"./DialogTriggerView-D7E3O5i1.js";import"./Switch-D3-f2FPR.js";import"./Label-CN6ALsUC.js";import"./useToggleState-B162DHyZ.js";import"./FieldError-Db676PEG.js";import"./LoadingSpinner-AZclZqAu.js";import"./Heading--tvq-06a.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BvDF2M3d.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
