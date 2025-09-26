import{r as x,j as e}from"./iframe-ygucezpU.js";import{F as t}from"./FileDropZone-BNuIAyTE.js";import{S as u}from"./Section-Kqktu6Cz.js";import{F}from"./FileCardList-Bx_KcWhP.js";import{F as f}from"./FileCard-BtdH6rN7.js";import{u as E,F as W,t as G}from"./Form-DbLu0b0l.js";import{B as s}from"./Button-Dsp-uMAe.js";import{A as M}from"./ActionGroup-CWPG_uZX.js";import{_ as j,$ as q}from"./IconWarning-Cs0D7_PK.js";import{H as g}from"./Heading-CwsWyhxJ.js";import{F as h}from"./FileField-ChEzs6_9.js";import{T as v}from"./Text-c8GLfZrX.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BljR2Fw0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv8w3zYd.js";import"./mergeRefs-C0ZYRiin.js";import"./index-BaLSpMVi.js";import"./utils-Dm2BIGqk.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DGTV1FYP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BIOlG5Yn.js";import"./useFocus-BBcZge3l.js";import"./useCollator-CZ70YDPg.js";import"./context-DzmzBjoy.js";import"./useLocalizedStringFormatter-TZqZqT18.js";import"./Button-CrpDhUsv.js";import"./ProgressBar-CbOwlFL2.js";import"./Label-BffVQixZ.js";import"./Hidden-sZrOLhP9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BqrMcV_T.js";import"./useFocusRing-CFbBFNPO.js";import"./useFocusable-CmrOOHc4.js";import"./VisuallyHidden-CIvyEb44.js";import"./ContextMenuSection-CLZ0Yijm.js";import"./Action-M3zsMwUk.js";import"./context-stas4iuT.js";import"./useStatic-B18UmQuP.js";import"./browser-BpjCDOvP.js";import"./getActionGroupSlot-igF58ako.js";import"./dynamic-DtVcInqU.js";import"./Popover-BoT9uJpy.js";import"./DialogTriggerView-C9zXFnun.js";import"./RSPContexts-Bg25W6Pr.js";import"./ClearPropsContextView-DkeNy3v-.js";import"./useControlledState-y1NsnI_K.js";import"./FocusScope-kmUkL49h.js";import"./Collection-CP_tcz-x.js";import"./CollectionBuilder-ZRNciRSk.js";import"./context-Bf2zQWgY.js";import"./Separator-CbVhXDvO.js";import"./SelectionManager-D4AWNFz3.js";import"./useEvent-Dau2XfVg.js";import"./Switch-D6rmBzD3.js";import"./Label-CDLmKIyL.js";import"./useToggleState-CLa0kjOM.js";import"./useFormReset-CqyvH-u7.js";import"./ColumnLayout-Bir-ZYut.js";import"./Avatar-bkcoc2qa.js";import"./AlertIcon-BoY9zsTJ.js";import"./Image-BL8Rj3qY.js";import"./Link-DPVICX3j.js";import"./ButtonView-Bw_s-3N9.js";import"./ContextMenuTriggerView-Bwjo7Y_G.js";import"./FieldError-DDKUc_sF.js";import"./FieldError-DAYQ7QfD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DHdSJfkf.js";import"./Heading-Bxqgoihn.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-CdOk873P.js";import"./Input-B7REfsMR.js";import"./EmulatedBoldText-oasbrdcJ.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
