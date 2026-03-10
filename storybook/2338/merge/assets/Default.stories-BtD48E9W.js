import{r as h,j as e}from"./iframe-Bge_iwzq.js";import{F as t}from"./FileDropZone-DIP2BAPQ.js";import{S as p}from"./Section-F6_pDsCx.js";import{F as c}from"./FileCardList-Ctdku7oY.js";import{F as d}from"./FileCard-BuMtHgCR.js";import{u as g,F as j,S,t as C}from"./ResetButton-B8dyUvel.js";import{B as u}from"./Button-DYq5oiR6.js";import{A as D}from"./ActionGroup-Cm9WLYvL.js";import{a0 as x,a1 as B}from"./IconWarning-CnGwh2Y2.js";import{H as F}from"./Heading-JLPBp959.js";import{F as f}from"./FileField-2JsMTzIc.js";import{T as L}from"./Text-Bo3CKbUr.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BLLUtKZ3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./useFieldComponent-DrAtnMqi.js";import"./utils-rhPAe061.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-70WXc8nw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./useFocus-M-LntWI3.js";import"./useCollator-BqBbPKoz.js";import"./useFocusRing-B6FG_9qv.js";import"./context-gG1Mi2B7.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocusable-BPbhPIus.js";import"./VisuallyHidden-BL5eqrat.js";import"./ContextMenuSection-S8YrfSf7.js";import"./ActionBatch-AWhYHCSY.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./browser-EEHoGSlH.js";import"./getActionGroupSlot-DLRBpctv.js";import"./dynamic-C3MU2GF_.js";import"./Dialog-BA7SIyML.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./FocusScope-DsvOCLtc.js";import"./ColumnLayout-DR49IgRS.js";import"./Avatar-D60EbKtz.js";import"./AlertIcon-DJ3CSUsO.js";import"./Image-arBWudKN.js";import"./Link-CwcCCToL.js";import"./OptionsButton-BFu4-Biu.js";import"./ButtonView-DwzX0guQ.js";import"./ContextMenuTriggerView-DFxj9B9z.js";import"./ContextMenuTrigger-B3VscP1G.js";import"./OverlayTrigger-Dvl7K4Qg.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./FieldError-D2SilRMV.js";import"./FieldError-Cv0VAgMN.js";import"./AlertText-BlzMkriF.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Modal-DEyfydXj.js";import"./Overlay-G0jPQhAE.js";import"./LoadingSpinner-BWNPdeXh.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";import"./remote-CO23tKXG.js";import"./Heading-DerjJN3d.js";import"./useFormValidation-SyV8SqLU.js";import"./Input-BXTXjJEE.js";import"./EmulatedBoldText-D9nC6wju.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone accept="image/png" {...props} onChange={setFiles}>
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};const rr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Multiple,m as WithAcceptedTypes,l as WithReactHookForm,rr as __namedExportsOrder,er as default};
