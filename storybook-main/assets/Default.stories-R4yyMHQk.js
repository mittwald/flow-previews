import{r as x,j as e}from"./iframe-RErHS549.js";import{F as t}from"./FileDropZone-CAaOPL2U.js";import{S as u}from"./Section-Cl0dcoy8.js";import{F}from"./FileCardList-VtgzQqoH.js";import{F as f}from"./FileCard-BIJEOrNZ.js";import{u as E,F as W,t as G}from"./Form-CSyr9Zsq.js";import{B as s}from"./Button-ICc2foaw.js";import{A as M}from"./ActionGroup-Amtb79Gu.js";import{_ as j,$ as q}from"./IconWarning-BaoYyhFJ.js";import{H as g}from"./Heading-Du-PhBCO.js";import{F as h}from"./FileField-Cy1Dt9i5.js";import{T as v}from"./Text-CPoMhumh.js";import"./IllustratedMessage-Cm0pWx4f.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-U9W9I2uQ.js";import"./mergeRefs-tFWMCLRY.js";import"./index-CKO7ssoe.js";import"./utils-CdmgfGZ7.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CT26T-mx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-ky1cKMBf.js";import"./useFocus-JMpVLlR6.js";import"./useCollator-BIKtW1yK.js";import"./context-BoCUnuIe.js";import"./useLocalizedStringFormatter-Cy6BSIiI.js";import"./Button-CLgYLV7x.js";import"./ProgressBar-BrVHyxaL.js";import"./Label-BxIDS5PE.js";import"./Hidden-BOL9WLXj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Qq9By8Rc.js";import"./useFocusRing-DWSWsOVe.js";import"./useFocusable-D3_285Zs.js";import"./VisuallyHidden-L1E0nJWV.js";import"./ContextMenuSection-Cha7hVMS.js";import"./Action-CZMuRmTa.js";import"./context-BXN4gM-G.js";import"./useStatic-BxcMFVdb.js";import"./browser-32b-cNga.js";import"./getActionGroupSlot-Bne6ZDFO.js";import"./dynamic-CQ7OwhYg.js";import"./Popover-D5R_X3qF.js";import"./DialogTriggerView-DWnrIBjB.js";import"./RSPContexts-B8Y67nNQ.js";import"./ClearPropsContextView-0a_DlM-r.js";import"./useControlledState-D306zaQt.js";import"./FocusScope-CM6IwZZ2.js";import"./Collection-C5b3lBlU.js";import"./CollectionBuilder-CejpnVI0.js";import"./Separator-Bss8HbVG.js";import"./Group-Co5LQX_Y.js";import"./SearchField-tD8L5lUZ.js";import"./FieldError-CXwIJwJV.js";import"./Form-CN0G9X2_.js";import"./useTextField-CpUnEOqT.js";import"./useFormReset-8mkS99ko.js";import"./TextField-BRNj-bGL.js";import"./useEvent-CfCGwGWG.js";import"./SelectionManager-Bhum3Vdb.js";import"./Switch-BRjYwsyW.js";import"./Label-COqzxAxq.js";import"./useToggleState-DNy1hOAg.js";import"./ColumnLayout-Dw31cGlX.js";import"./Avatar-Bq1yI5L8.js";import"./AlertIcon-CtU_bXwt.js";import"./Image-CYSQ5h-r.js";import"./Link-B1GXIr35.js";import"./ButtonView-Df1iN2s8.js";import"./ContextMenuTriggerView-CU9Ibh_I.js";import"./FieldError-Da2hJYUR.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BMdPihtW.js";import"./Heading-BFUjbCrr.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-JQA-sSfV.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
