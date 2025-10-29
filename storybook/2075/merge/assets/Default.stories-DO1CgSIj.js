import{r as x,j as e}from"./iframe-C9dYfgSf.js";import{F as t}from"./FileDropZone-DkLW3tc1.js";import{S as u}from"./Section-DQdw2BcZ.js";import{F}from"./FileCardList-CfqTfLFe.js";import{F as f}from"./FileCard-BmnP0flD.js";import{u as S,F as C,t as D}from"./Form-BmEbV8bf.js";import{B as s}from"./Button-RNpKkVK8.js";import{A as y}from"./ActionGroup-DjfN3Zb7.js";import{_ as j,$ as O}from"./IconWarning-fVXPK3i1.js";import{H as g}from"./Heading-Bk9PzEEg.js";import{F as h}from"./FileField-CmbzPpxy.js";import{T as b}from"./Text-DeJ4PaiG.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-Cv2NUbTG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./index-DbMX5jmM.js";import"./useFieldComponent-Br5YSvi-.js";import"./utils-CO6LnGLR.js";import"./Text-CQ7Fwsu6.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DAjt5CEG.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DpM9fuaR.js";import"./useFocus-xkgg1n29.js";import"./useCollator-C7M5jLo1.js";import"./context-iM_q7ty8.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./Button-CD1zJvoj.js";import"./ProgressBar-BM6quT-y.js";import"./Label-HJzRYjqm.js";import"./Hidden-C5ZQOCSQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlhdQGL7.js";import"./useFocusRing-29NBTIcT.js";import"./useFocusable-U5sjNWcc.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./ContextMenuSection-1UGXIKfR.js";import"./Action-BrSPa5cY.js";import"./context-BXzGXLkM.js";import"./useStatic-BaiCJrRH.js";import"./browser-CNYhznL3.js";import"./getActionGroupSlot-CRNg2W87.js";import"./dynamic-4HLWwwwW.js";import"./Dialog-W7ChNaVu.js";import"./RSPContexts-BkJpVpLi.js";import"./OverlayArrow-CkkZdON1.js";import"./useControlledState-DlEEU1a1.js";import"./Collection-BLbQf80v.js";import"./CollectionBuilder-tXiCZVVh.js";import"./SelectionIndicator-BcmkxpDt.js";import"./Separator-j1ISyAzV.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./FocusScope-BDFIEW4R.js";import"./ColumnLayout-CyxrcCUm.js";import"./Avatar-DFI-Bp9B.js";import"./AlertIcon-D6kPasG2.js";import"./Image-O5wjl2wC.js";import"./Link-XChpnkCx.js";import"./ContextMenuTriggerView-Bt4zCTt_.js";import"./ContextMenuTrigger-C0v7pN4R.js";import"./OverlayTrigger-CgW4dBKa.js";import"./ControlledNotification-CQYIBWNV.js";import"./OverlayContextProvider-CZ-NaAce.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DDIQ3dza.js";import"./Heading-D3uq54pF.js";import"./useFormValidation-cSt72451.js";import"./Input-B4cpKRwG.js";import"./useMakeFocusable-JetFJK9R.js";import"./EmulatedBoldText-WKOr2IKU.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,ze as __namedExportsOrder,$e as default};
