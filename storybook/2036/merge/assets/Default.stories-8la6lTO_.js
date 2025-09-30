import{r as x,j as e}from"./iframe-B7R3Cp0m.js";import{F as t}from"./FileDropZone-C5qjJxFD.js";import{S as u}from"./Section-CXYImEJk.js";import{F}from"./FileCardList-DK-5Mwhx.js";import{F as f}from"./FileCard-DrjDXlnm.js";import{u as E,F as W,t as G}from"./Form-Ca-ydWJ8.js";import{B as s}from"./Button-BfLhmrhP.js";import{A as M}from"./ActionGroup-DwKGVJQl.js";import{_ as j,$ as q}from"./IconWarning-CiDVbDUI.js";import{H as g}from"./Heading-CSRs2ihp.js";import{F as h}from"./FileField-C8-gE-Wk.js";import{T as v}from"./Text-mmmtihIj.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-bwsdVomL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./index-DEEeTq16.js";import"./utils-Cx-QUl4i.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cq8XMVEi.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./useFocus-BfnX2cH5.js";import"./useCollator-DXIp2FB0.js";import"./context-DZWDYeWp.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./Button-DTyr71oU.js";import"./ProgressBar-BUsdfXWy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CZzcdL0j.js";import"./useFocusRing-KQNrYpLi.js";import"./useFocusable-gE9kDuNJ.js";import"./VisuallyHidden-7GIVT4u3.js";import"./ContextMenuSection-Qzqr7kFk.js";import"./Action-Duus-uy7.js";import"./context-s2Psh2SW.js";import"./useStatic-B9aD_BAc.js";import"./browser-D9qXvoab.js";import"./getActionGroupSlot-kiQExVjr.js";import"./dynamic-DQGoa_Us.js";import"./Dialog-qQprQaf0.js";import"./RSPContexts-nV9TqCtk.js";import"./OverlayArrow-BoyqVqhR.js";import"./useControlledState-DvHwfOTB.js";import"./Collection-DVhSH9ed.js";import"./CollectionBuilder-CIEMJSOs.js";import"./context-DaR2uroz.js";import"./Separator-BVTEwXXm.js";import"./SelectionManager-D3KJzfXx.js";import"./useEvent-2yiTmDJR.js";import"./FocusScope-DeadHndu.js";import"./ColumnLayout-C5z9VB7m.js";import"./Avatar-D20QDC8P.js";import"./AlertIcon-B0WxKp1R.js";import"./Image-D28M7Eie.js";import"./Link-BM18EQ80.js";import"./ButtonView-BEoiJla2.js";import"./ContextMenuTriggerView-CL5nlGJB.js";import"./ContextMenuTrigger-BNEAMBMv.js";import"./OverlayTrigger-CAnQWu2d.js";import"./ControlledNotification-C5B5aMg4.js";import"./OverlayContextProvider-B7mj50o_.js";import"./FieldError-C50u32vO.js";import"./FieldError-DSYDYeL4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CBvMx9JI.js";import"./Heading-CiGgeB_H.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Dv3hg-yA.js";import"./Input-B7hM4ezT.js";import"./useMakeFocusable-Co-fjfKM.js";import"./EmulatedBoldText-Bu0mLg2V.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
