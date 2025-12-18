import{r as x,j as e}from"./iframe-D_taohHE.js";import{H as t,q as d}from"./TimeField-CWCEj6Gp.js";import{S as u}from"./Section-BGMokIOG.js";import{F,b as f}from"./FileCardList-DKvIBCyR.js";import{u as S,F as C,t as D}from"./Form-B6g14ecx.js";import{S as b}from"./ResetButton-B35okg0e.js";import{B as g}from"./Button-BzDcn9gw.js";import{A as y}from"./ActionGroup-CtTj0KGg.js";import{_ as j,$ as B}from"./IconWarning-Bw09QPeB.js";import{H as h}from"./Heading-B0K4zEMw.js";import{T as O}from"./Text-ssmcNS2J.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DHsq54k3.js";import"./mergeRefs-K1QocDOZ.js";import"./index-C4Et8VlK.js";import"./clsx-B-dksMZM.js";import"./Accordion-hys_Z-y_.js";import"./dynamic-CPLuTyBP.js";import"./Alert-BVOvaJmZ.js";import"./AlertIcon-DsUCMzzQ.js";import"./useLocalizedStringFormatter-ofdICzIo.js";import"./context-EvUTNNVJ.js";import"./AlertBadge-DupL7VIa.js";import"./Align-lAtYkD7V.js";import"./Popover-CZk6Ipu0.js";import"./context-Bl1_lLpq.js";import"./Button-BveBpqmD.js";import"./utils-pUWJ6aLq.js";import"./ProgressBar-CjQdCBSe.js";import"./Hidden-D9ZNC0Hz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BpV933-R.js";import"./useFocusable-XY9B6x70.js";import"./RSPContexts-vZQTzHeQ.js";import"./Collection-DnhOSFxc.js";import"./CollectionBuilder-DgFesNsg.js";import"./SelectionIndicator-TPIlv31g.js";import"./Separator-B9t_aoMS.js";import"./browser-CjAcuXT7.js";import"./useStatic-D1L299Q0.js";import"./OverlayTrigger-DdpU5CpM.js";import"./TableFooterRow-CkmR9iEr.js";import"./SkeletonText-DZCbX5t_.js";import"./Avatar-CyCWf7Sw.js";import"./AvatarStack-DjK4_GvM.js";import"./Badge-df7STlF7.js";import"./BigNumber-C4erlLZ0.js";import"./Breadcrumb-BQwb8t2O.js";import"./Link-DNZGcrEw.js";import"./Legend-DWlLuLfH.js";import"./Color-DoYXFuaB.js";import"./Content-BMBcTKWL.js";import"./Label-BE25Mez9.js";import"./ContextualHelpTrigger-Di1ZUJxb.js";import"./CounterBadge-Ch0G_sYN.js";import"./DonutChart-CGEra__W.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DipKuwAa.js";import"./Header-BOGXXJwV.js";import"./Image-DajkgyNB.js";import"./Initials-B0t7F_wS.js";import"./InlineCode-DhfaAW0i.js";import"./PopoverTrigger-9SsYTlve.js";import"./LoadingSpinner-BB9iqpcc.js";import"./Separator-DNLy0jJN.js";import"./Message-aTJ2QV4k.js";import"./MessageSeparator-l6wGhyEd.js";import"./NavigationGroup-DObyIeLm.js";import"./Notification-D5W1roVe.js";import"./NotificationProvider-DOl1AdVQ.js";import"./ProgressBar-68JDRf4g.js";import"./Rating-Cq95JU_R.js";import"./Skeleton-T4ao3t7M.js";import"./EmulatedBoldText-B54qJ1r4.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,l as ReadOnly,m as WithAcceptedTypes,c as WithReactHookForm,ze as __namedExportsOrder,$e as default};
