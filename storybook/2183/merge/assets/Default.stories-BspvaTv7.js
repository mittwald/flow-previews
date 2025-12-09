import{r as x,j as e}from"./iframe-BqP6npnu.js";import{H as t,q as d}from"./TimeField-CfFM0LAi.js";import{S as u}from"./Section-BgyjzhPc.js";import{F,b as f}from"./FileCardList-CMNbaDEr.js";import{u as S,F as C,t as D}from"./Form-D7KFnqtM.js";import{S as b}from"./ResetButton-Br_fJDuM.js";import{B as g}from"./Button-CINxW6TG.js";import{A as y}from"./ActionGroup-DkEZCvBM.js";import{Z as j,_ as B}from"./IconWarning-DbZ28gHF.js";import{H as h}from"./Heading-Dc3wJcTH.js";import{T as O}from"./Text-DywGJIRt.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-r-rgdyuu.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./clsx-B-dksMZM.js";import"./Accordion-spl5epLr.js";import"./dynamic-S48VUeic.js";import"./Alert-DDe2aHVZ.js";import"./AlertIcon-D6OwT7OR.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./context-Dpv25OMu.js";import"./AlertBadge-BDjWZOe3.js";import"./Align-DGoxUnnr.js";import"./Popover-weX1_5w_.js";import"./context-WZRL0rNv.js";import"./Button-Cqxj8v2u.js";import"./utils-Co5LfTVH.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./RSPContexts-DNFW1N-a.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./browser-DXN0P2CK.js";import"./useStatic-BDpTt2fP.js";import"./OverlayTrigger-kHGfUlCD.js";import"./TableFooterRow-DE-kA3m3.js";import"./SkeletonText-wjzRGxSG.js";import"./Avatar-CG6X940b.js";import"./AvatarStack-CGiknhkD.js";import"./Badge-CbvcsGSe.js";import"./BigNumber-CbaoHXSC.js";import"./Breadcrumb-Bk12IqNH.js";import"./Link-d1M47Kmn.js";import"./Legend-CLq0DkHM.js";import"./Color-B6n4dvbc.js";import"./Content-Dz6fNrX7.js";import"./Label-Dvn9fxen.js";import"./ContextualHelpTrigger-CYLItONs.js";import"./CounterBadge-shrozi75.js";import"./remote-CSf0dxK4.js";import"./DonutChart-CHPfrUyM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Ccc6Ijre.js";import"./Header-CiylrxZe.js";import"./Image-Bzt2Nbsw.js";import"./Initials-Bcwc3vJF.js";import"./InlineCode-BUxkWh74.js";import"./PopoverTrigger-gkUZ0oSI.js";import"./LoadingSpinner-C4lBONmO.js";import"./Separator-CATwKm_c.js";import"./Message-D8K-Im88.js";import"./MessageSeparator-DNMph2bZ.js";import"./NavigationGroup-CsN8a96z.js";import"./Notification-Ddl9cNgw.js";import"./NotificationProvider-DI6lihFR.js";import"./ProgressBar-CMJ4ivwe.js";import"./Rating-1epREFBF.js";import"./Skeleton-CfQhGXNU.js";import"./EmulatedBoldText-Htc9gLg0.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,Je={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Qe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,l as ReadOnly,m as WithAcceptedTypes,c as WithReactHookForm,Qe as __namedExportsOrder,Je as default};
