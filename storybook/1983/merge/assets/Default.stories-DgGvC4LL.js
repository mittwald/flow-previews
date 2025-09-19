import{r as x,j as e}from"./iframe-C41GO6P6.js";import{F as t}from"./FileDropZone-CdnETU3K.js";import{S as u}from"./Section-kaw1-Ecj.js";import{F}from"./FileCardList-Cjdr2C4z.js";import{F as f}from"./FileCard-BiL2zLGk.js";import{u as E,F as W,t as G}from"./Form-DfG2V2ai.js";import{B as s}from"./Button-EU7ZCBUb.js";import{A as M}from"./ActionGroup-BO8EJ9_Y.js";import{_ as j,$ as q}from"./IconWarning-C5RwbqDR.js";import{H as g}from"./Heading-DJ1QGBtr.js";import{F as h}from"./FileField-DuK9imK8.js";import{T as v}from"./Text-BYSgteT5.js";import"./IllustratedMessage-B6vTsg3z.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlE6VFtE.js";import"./mergeRefs-Hgr2X06A.js";import"./index-D__hiUrI.js";import"./utils-Be5F4DcQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bnb73OL0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel--RfYT5XW.js";import"./useFocus-CcyM5uvG.js";import"./useCollator-D5nYlsQq.js";import"./context-Om8YW_Qo.js";import"./useLocalizedStringFormatter-DK3NG-Ma.js";import"./Button-DlD3fRGu.js";import"./ProgressBar-BdICdwMW.js";import"./Label-I71uq1jB.js";import"./Hidden-COug4O8x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DSqdD5KI.js";import"./useFocusRing-DXsfSaAZ.js";import"./useFocusable-DyjaqCu5.js";import"./VisuallyHidden-D1Yd7fBj.js";import"./ContextMenuSection-BlJvGXA9.js";import"./Action-DU6nM0zW.js";import"./context-1RA5jvOs.js";import"./useStatic-DHBtTVNq.js";import"./browser-DspoMTVt.js";import"./getActionGroupSlot-BqgUIaia.js";import"./dynamic-DxnCaHhV.js";import"./Popover-DEl9axMZ.js";import"./DialogTriggerView-BwB5gCJZ.js";import"./RSPContexts-B6QAlzIf.js";import"./ClearPropsContextView-CpAffOzl.js";import"./useControlledState-D2xxPiTl.js";import"./FocusScope-V0DR1oSw.js";import"./Collection-C5OyY5G9.js";import"./CollectionBuilder-DOOsEd3G.js";import"./Separator-CWruQEFN.js";import"./Group-celsVWdW.js";import"./SearchField-BbBM1aCT.js";import"./FieldError-qUs-TTn2.js";import"./Form-DZUJdQjd.js";import"./useTextField-CQA55vhK.js";import"./useFormReset-DAlqRR2j.js";import"./TextField-DApuMKmH.js";import"./useEvent-C6r-N21P.js";import"./SelectionManager-ARZMK7nk.js";import"./Switch-CPNMTTop.js";import"./Label-BmUyaMI1.js";import"./useToggleState-Dbq0WoWL.js";import"./ColumnLayout-C3s3h48f.js";import"./Avatar-DBGgX8gE.js";import"./AlertIcon-gVd4twNE.js";import"./Image-oASVOgE8.js";import"./Link-Bg3EwyrC.js";import"./ButtonView-CFDj8nHq.js";import"./ContextMenuTriggerView-BbmOLd2F.js";import"./FieldError-DxG-LHoh.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-MF8PlszG.js";import"./Heading-DSFKQ-67.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CJIUXOgz.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
