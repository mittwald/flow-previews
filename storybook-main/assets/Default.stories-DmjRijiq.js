import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CtQTiInQ.js";import{F as t}from"./FileDropZone-CjMjCNCS.js";import{S as c}from"./Section-C2M3YcEF.js";import{F as d}from"./FileCardList-CSW-wIt9.js";import{F as u}from"./FileCard-BxPP2VrA.js";import{u as b,F as I,t as T}from"./Form-Dcg5VYo8.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-rH72YzgV.js";import{A as w}from"./ActionGroup-btqjAAND.js";import{j as x,k as W}from"./IconWarning-QXks_Kv-.js";import{H as F}from"./Heading-C5oNFXhr.js";import{F as f}from"./FileField-JW0L6ZM8.js";import{T as E}from"./Text-VF_oP7nB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-flWRIncw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./utils-D0CTRpvX.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-oMr6ueMZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./useFocus-HZduNndM.js";import"./useCollator-B4aWBoUu.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./Button-BEBevqbU.js";import"./ProgressBar-DPPT7aTs.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEYeyB88.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./ContextMenuSection-CazUyE0l.js";import"./Action-BzpotNjO.js";import"./context-CTL7IXlD.js";import"./useStatic-6gmUMcuL.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-OAZ-j8kn.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D2bUbTtQ.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Cidi8nN7.js";import"./Collection-mdal2UB1.js";import"./CollectionBuilder-Bzd5BBwK.js";import"./Separator-CJeFikfz.js";import"./useOverlayTriggerState-BZ_Sugy1.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-BAB-BMSj.js";import"./useEvent-BQK_0uZ_.js";import"./FocusScope-Cx-5Cw_n.js";import"./ColumnLayout-V6_UbH1_.js";import"./Avatar-CDRUkGAS.js";import"./react-children-utilities-DxL90CBS.js";import"./AlertIcon-tK-r7TkC.js";import"./Image-CR5wxurj.js";import"./Link-DQ9Fv95T.js";import"./OptionsButton-Cr1nkWHi.js";import"./ButtonView-BNYYDlgG.js";import"./ContextMenuContent-Cp44yHCN.js";import"./Popover-LCccCEfa.js";import"./OverlayTrigger-C2ciT0Db.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-D98NT4gk.js";import"./Switch-PQaaVNbc.js";import"./Label-C3GsNgl3.js";import"./useToggleState-GjA-q7MY.js";import"./useFormReset-Dt6BcYvw.js";import"./FieldError-D1V0yKtv.js";import"./FieldError-DHw7a52T.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-Bpd2bwIk.js";import"./Heading-BzdgKMPb.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-CI5EZsou.js";import"./Input-DIVKzZcg.js";import"./EmulatedBoldText-D1jUzRoU.js";const ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const Fr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
