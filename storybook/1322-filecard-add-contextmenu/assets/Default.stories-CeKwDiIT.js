import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CtQTiInQ.js";import{F as t}from"./FileDropZone-nlU3C3gB.js";import{S as c}from"./Section-CvSh2rmp.js";import{F as d}from"./FileCardList-BGovnmXz.js";import{F as u}from"./FileCard-BVPEyHjQ.js";import{u as k,F as I,t as T}from"./Form-B_YZUHw7.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-DixTcy-g.js";import{A as w}from"./ActionGroup-edo7OWsJ.js";import"./IconApp-DB6cOM9g.js";import{i as x,j as W}from"./IconWarning-kCzmC3X3.js";import{H as F}from"./Heading-DBo8I5WT.js";import{F as f}from"./FileField-D6dLetUu.js";import{T as E}from"./Text-jYIFGcvn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-Dsc7CEpe.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oN21CMYe.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./utils-DcjC1aig.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-UNZxgqCx.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DPCVhyCF.js";import"./useFocus-nbRcaiXq.js";import"./useCollator-Sm__dF4I.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./Button-PaysjOmZ.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D57HKG0J.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocusable-CZzsVVWR.js";import"./VisuallyHidden-DdD-CBUj.js";import"./ContextMenuSection-g__z2ab2.js";import"./Action-BTBARLRy.js";import"./context-CetbvVVg.js";import"./useStatic-DHHoNh1z.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-Duw2LQJS.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DMNLsUVl.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-BupEJ213.js";import"./CollectionBuilder-92b9NEiR.js";import"./Separator-pz6eaBqf.js";import"./useOverlayTriggerState-DY-7iay5.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-B5yo36z-.js";import"./useEvent-KizPqgSt.js";import"./FocusScope-71KNoUag.js";import"./ColumnLayout-BYnAdeoN.js";import"./Avatar-CQyzIXew.js";import"./react-children-utilities-DxL90CBS.js";import"./Image-trjbxTrl.js";import"./Link-tfZlISBr.js";import"./Wrap-DQq6jo70.js";import"./OptionsButton-O_QyYiUI.js";import"./ButtonView-d3skRGZQ.js";import"./ContextMenuContent-rWWAyNor.js";import"./Popover-DoD_x-cK.js";import"./OverlayTrigger-Duo_Ybcj.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-CWwya1Ag.js";import"./Switch-BMcUd1EB.js";import"./Label-BJo4HJwf.js";import"./useToggleState-BLH-nnKh.js";import"./useFormReset-CGMiLjFo.js";import"./FieldError-BrTRafpo.js";import"./FieldError-CQDuJ0EJ.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-BTj-lsSS.js";import"./Heading-gLVfuOEw.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-DG4TqYaU.js";import"./Input-D73fD5bD.js";import"./EmulatedBoldText-D1jUzRoU.js";const Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=k(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const fr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
