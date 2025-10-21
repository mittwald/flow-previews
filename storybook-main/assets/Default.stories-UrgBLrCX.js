import{r as x,j as e}from"./iframe-CMcq8v1f.js";import{F as t}from"./FileDropZone-DawvaUSZ.js";import{S as u}from"./Section-BVe8Ycpq.js";import{F}from"./FileCardList-Ces_M3uz.js";import{F as f}from"./FileCard-jw7UpVfR.js";import{u as S,F as C,t as D}from"./Form-DzH8G5ZK.js";import{B as s}from"./Button-CRhbM7FI.js";import{A as y}from"./ActionGroup-DppP5Nb_.js";import{_ as j,$ as O}from"./IconWarning-pzLTBmMV.js";import{H as g}from"./Heading-B3YRxumr.js";import{F as h}from"./FileField-DBkZ5p4R.js";import{T as b}from"./Text-DOkc_YZA.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-DNWacHmN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./index-Tcjlyiep.js";import"./useFieldComponent-B7IsP0qp.js";import"./utils-B4_KO4f3.js";import"./Text-CkmSClwy.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CDk9z-7u.js";import"./ClearPropsContext-CU9ecYMv.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-MLAtSIJy.js";import"./useFocus-B0Qlm3zv.js";import"./useCollator-DTERHYIY.js";import"./context-Bckjq63R.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./Button-qWTNe4li.js";import"./ProgressBar-DGR0UqD3.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bqdsvk60.js";import"./useFocusRing-CoJ5esee.js";import"./useFocusable-DlaONHPB.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./ContextMenuSection-DtqQsaJ2.js";import"./Action-DzVfKIry.js";import"./context-haW4s5UJ.js";import"./useStatic-CKvWQ5ch.js";import"./browser-BnbqEoZX.js";import"./getActionGroupSlot-CSYISPXH.js";import"./dynamic-FUMijUiW.js";import"./Dialog-Drh022ms.js";import"./RSPContexts-DoqEYCaI.js";import"./OverlayArrow-Czusrgg9.js";import"./useControlledState-C8UmWEhe.js";import"./Collection-lzDPGY_z.js";import"./CollectionBuilder-DClya-CG.js";import"./SelectionIndicator-npitMQ6K.js";import"./Separator-B5umkblU.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./FocusScope-BZyWBR-T.js";import"./ColumnLayout-r5qjBDtD.js";import"./Avatar-DMp9UzEn.js";import"./AlertIcon-CmJKkQcL.js";import"./Image-DyPgCXsb.js";import"./Link-BTcql2fF.js";import"./ButtonView-DRYamufn.js";import"./ContextMenuTriggerView-wqAI8Kxt.js";import"./ContextMenuTrigger-CUHrEZI3.js";import"./OverlayTrigger-CxCtI9-h.js";import"./ControlledNotification-B4XPi9m7.js";import"./OverlayContextProvider-CrE8gLZT.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DgAvzAIP.js";import"./Heading-CmiL6R02.js";import"./useFormValidation-C01Q1Aoq.js";import"./Input-D43W09OA.js";import"./useMakeFocusable-B2ENdPIj.js";import"./EmulatedBoldText-DAg28Pal.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Je=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Je as __namedExportsOrder,ze as default};
