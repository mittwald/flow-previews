import{r as x,j as e}from"./iframe-N2ZMMBua.js";import{I as t,r as u}from"./TimeField-Ce_qBq4J.js";import{S as F}from"./Section-Dlm8T0mZ.js";import{F as f,b as g}from"./FileCardList-BFe4Um8S.js";import{u as S,F as C,t as D}from"./Form-BQLLcX8A.js";import"./ResetButton-CjjJ6zfo.js";import{B as s}from"./Button-CQTX7C-7.js";import{A as y}from"./ActionGroup-CcC1RkNL.js";import{_ as j,$ as b}from"./IconWarning-BFO_JV1T.js";import{H as h}from"./Heading-UwbM-u6i.js";import{T as O}from"./Text-B0nKVVvA.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-wZrUcs9C.js";import"./mergeRefs-D0sT2cWn.js";import"./index-C2BNDRbk.js";import"./clsx-B-dksMZM.js";import"./utils-UqP59DSc.js";import"./Accordion-Cx7YOjK-.js";import"./dynamic-Bg49ug6j.js";import"./Alert-C4x5XvaN.js";import"./AlertIcon-DP3sd6M_.js";import"./useLocalizedStringFormatter-BWX2KnbU.js";import"./context-CVOB-S2d.js";import"./AlertBadge-CCMWeYGv.js";import"./Align-Ds9Q2xSR.js";import"./Popover-ITKHSPMr.js";import"./context-0hb6Imhj.js";import"./Button-ckJwL_Qm.js";import"./ProgressBar-DX8gLGDN.js";import"./Hidden-De6Yi14J.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CsS12N7n.js";import"./useFocusable-CYxsuuBl.js";import"./RSPContexts-W5rfe12r.js";import"./Collection-B-VaM1xo.js";import"./CollectionBuilder-sM43fN06.js";import"./SelectionIndicator-Pu8gh7X4.js";import"./Separator-05e1ttKJ.js";import"./browser-C3uOmI6O.js";import"./useStatic-BK7FFX-B.js";import"./OverlayTrigger-CtrEPdBT.js";import"./TableFooterRow-BSMhJEWV.js";import"./SkeletonText-C0dZ71Dc.js";import"./Avatar-UT9YFCej.js";import"./AvatarStack-DTzcVfX5.js";import"./Badge-CmQdROSx.js";import"./BigNumber-BpYjVhMM.js";import"./Breadcrumb-BU79UJRj.js";import"./Link-DGEEGfY5.js";import"./Legend-DPTWJJT_.js";import"./Color-g_oGdWKO.js";import"./Content-DKIO4hDm.js";import"./Label-CNIsCRQn.js";import"./ContextualHelpTrigger-MtOPALsd.js";import"./CounterBadge-CnoO7JzY.js";import"./DonutChart-D5hSwyhh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C92wbj0P.js";import"./Header-BplYHpBk.js";import"./Image-c560F83g.js";import"./Initials-1nVpomP1.js";import"./InlineCode-B0WCYRLN.js";import"./PopoverTrigger-DLnLI4gj.js";import"./LoadingSpinner-BF2HGxsW.js";import"./Separator-DrFjGgJ9.js";import"./Message-CzM_qt2p.js";import"./MessageSeparator-khAvmqi6.js";import"./NavigationGroup-p6nb8hAj.js";import"./Notification-DLP1k1dH.js";import"./NotificationProvider-VEcgpjyi.js";import"./ProgressBar-Dgh4xYdk.js";import"./Rating-CceFiRCw.js";import"./Skeleton-CkbNl4QS.js";import"./getActionGroupSlot-DEBzWZmX.js";import"./EmulatedBoldText-zrEG-jWJ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
