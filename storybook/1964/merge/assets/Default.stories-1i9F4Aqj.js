import{r as g,j as e}from"./iframe-CW4eA9k4.js";import{F as t}from"./FileDropZone-DL3SNVlb.js";import{S as d}from"./Section-DZ628zs3.js";import{F as u}from"./FileCardList-BsSN9ybn.js";import{F}from"./FileCard-BP6dzQDx.js";import{u as k,F as U,t as w}from"./Form-Bh3TNRhF.js";import{B as s}from"./Button-BjlFMLDb.js";import{A as E}from"./ActionGroup-Y-QP267j.js";import{_ as x,$ as R}from"./IconWarning-D1jj5TJf.js";import{H as f}from"./Heading-ukkjVDjs.js";import{F as h}from"./FileField-DHdnv20g.js";import{T as W}from"./Text-Db3UCsEl.js";import"./IllustratedMessage-Blct1IQC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bql0h4A2.js";import"./mergeRefs-BcYJB-lQ.js";import"./index-B6-53XGK.js";import"./utils-LQZW6rX9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CUI2zCQ5.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CsKDXT_H.js";import"./useFocus-rpK25HP0.js";import"./useCollator-DeJ4YmOD.js";import"./context-DFsoEI_J.js";import"./useLocalizedStringFormatter-Cgh8agJ8.js";import"./Button-LSmOeJqu.js";import"./ProgressBar-CmNSRDCs.js";import"./Label-Bbcp5SCN.js";import"./Hidden-DmXjFFnH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Du8ADkCR.js";import"./useFocusRing-O7qNIesH.js";import"./useFocusable-UDevydpZ.js";import"./VisuallyHidden-DAkOZO38.js";import"./ContextMenuSection-9hjVwN3o.js";import"./Action-Bf9Z-Hza.js";import"./context-D5N2lUOa.js";import"./useStatic-DUg3iw8_.js";import"./browser-CS0dj8Dh.js";import"./getActionGroupSlot-vBeuxSBi.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-WgwS_B3t.js";import"./RSPContexts--2BkcUf2.js";import"./OverlayArrow-92dvWqKB.js";import"./useControlledState-Dx2k1uzE.js";import"./Collection-BBOAX0bv.js";import"./CollectionBuilder-COr3RMXa.js";import"./Separator-DG994JLx.js";import"./Group-dsIczUwA.js";import"./SearchField-uV4xHJex.js";import"./FieldError-DfDNH_Ov.js";import"./Form-Carw_-CN.js";import"./useTextField-Cdkp1LGI.js";import"./useFormReset-C1QC8NQi.js";import"./TextField-B9ZB3AOz.js";import"./useEvent-g2bJgFQA.js";import"./SelectionManager-c5mN7BQ-.js";import"./FocusScope-DDrNwogJ.js";import"./ColumnLayout-CW48NvkQ.js";import"./Avatar-Bz2_Q01A.js";import"./AlertIcon-B8J2qDX7.js";import"./Image-CSxmMcAi.js";import"./Link-CKcJS3Hs.js";import"./ButtonView-bLk6_MFs.js";import"./ContextMenuContent-CvkJkU9f.js";import"./Popover-BySWrKlF.js";import"./DialogTriggerView-VKpqTSm1.js";import"./Switch-iXgJR371.js";import"./Label-BmbUI49G.js";import"./useToggleState-BOILe57A.js";import"./FieldError-DDMeD0d0.js";import"./LoadingSpinner-BE9DZA1q.js";import"./Heading-Bs47TW4c.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Dbwzf73Y.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
