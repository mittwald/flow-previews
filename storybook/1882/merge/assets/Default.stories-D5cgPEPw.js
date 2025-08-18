import{r as h,j as e}from"./iframe-BAtUELBR.js";import{F as t}from"./FileDropZone-D5rywRA2.js";import{S as c}from"./Section-C4j0_hHz.js";import{F as d}from"./FileCardList-TjRe0RAQ.js";import{F as u}from"./FileCard-zs_kTKFm.js";import{u as T,F as Z,t as _}from"./Form-fruY6vLK.js";import{B as s}from"./Button-BEq1XaV7.js";import{A as b}from"./ActionGroup-DylyHBpW.js";import{$ as x,a0 as k}from"./IconWarning-h84dHhem.js";import{H as F}from"./Heading-WI-2mpz5.js";import{F as f}from"./FileField-BRspvL9L.js";import{T as U}from"./Text-DzMLmIhZ.js";import"./IllustratedMessage-3w_NRHcG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./utils-UbQMFgd1.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-j2Uyll_5.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DmioRyAZ.js";import"./useFocus-DJUZ2En4.js";import"./useCollator-CMTT-Cpv.js";import"./context-DbLHYHiQ.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./Button-BiJPJvF0.js";import"./ProgressBar-BZ7qWBUr.js";import"./Label-DhaMlcU0.js";import"./Hidden-CDb1KA3j.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B88qu-VD.js";import"./useFocusRing-BdUFZX00.js";import"./useFocusable-BuN38nX6.js";import"./VisuallyHidden-CFnWwY81.js";import"./ContextMenuSection-DceDQlVt.js";import"./Action-DFFHrQF0.js";import"./context-B7yiaX0P.js";import"./useStatic-D26yqcd1.js";import"./browser-BVtPTxgw.js";import"./getActionGroupSlot-BPPCyVYO.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CdEVLYW9.js";import"./RSPContexts-DQlzARDq.js";import"./OverlayArrow-CGwoImC3.js";import"./useControlledState-Cdm8pC1T.js";import"./Collection-DKvh5qnS.js";import"./CollectionBuilder-DOOg8umD.js";import"./Separator-BOj5W9de.js";import"./Group-BnQz7s-E.js";import"./SearchField-DJD_RJ9_.js";import"./FieldError-D0SFQKR_.js";import"./Form-D4YUCIIk.js";import"./useTextField-BD89Nm0g.js";import"./useFormReset-Cu48O1XS.js";import"./TextField-CA7eDuBl.js";import"./useEvent-DEdGGfK8.js";import"./SelectionManager-pSSWogs3.js";import"./FocusScope-CQU9T81i.js";import"./ColumnLayout-7fgRYgQ7.js";import"./Avatar-C7MyfFir.js";import"./AlertIcon-BmuSOhJl.js";import"./Image-DFiE1RXM.js";import"./Link-3PDTsx4r.js";import"./ButtonView-oKENZZvg.js";import"./ContextMenuContent-C8v1VTMy.js";import"./Popover-4D2PTTn1.js";import"./DialogTriggerView-TQtuWl8o.js";import"./Switch-CTfhAnZs.js";import"./Label-QEHCu_aF.js";import"./useToggleState-BcvpSEE1.js";import"./FieldError-C6NpbvhG.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./Heading-ByYwZp8f.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CosrpHXB.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=T(),i=_();return e.jsxs(Z,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
