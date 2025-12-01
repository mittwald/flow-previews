import{r as x,j as e}from"./iframe-Clmt7jYU.js";import{H as t,q as d}from"./TimeField-C0di3Y5z.js";import{S as u}from"./Section-D-4V5L53.js";import{F,b as f}from"./FileCardList-C6knu-Gv.js";import{u as S,F as C,t as D}from"./Form-FyEhClNl.js";import{S as b}from"./ResetButton-Bi81rG4L.js";import{B as g}from"./Button-Cpx-qVCp.js";import{A as y}from"./ActionGroup-3f2mOrmo.js";import{_ as j,$ as B}from"./IconWarning-CMDAZJGy.js";import{H as h}from"./Heading-DOf1Gbjg.js";import{T as O}from"./Text-BQs7jhBI.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Cmcxz_BG.js";import"./mergeRefs-BVqKkfsA.js";import"./index-DiVEBKFG.js";import"./clsx-B-dksMZM.js";import"./Accordion-2-mRDe9S.js";import"./dynamic-ByO6kVlP.js";import"./Alert-BgyTes7-.js";import"./AlertIcon-BuWV4Npm.js";import"./useLocalizedStringFormatter--ByhM2n4.js";import"./context-J-yaWB4J.js";import"./AlertBadge-B-cIikZ6.js";import"./Align-kP2wQykA.js";import"./Popover--yCHfjbQ.js";import"./context-BbRYzAs6.js";import"./Button-MP-U6i_K.js";import"./utils-BaIVInUf.js";import"./ProgressBar-D_4BHyIX.js";import"./Hidden-BZve3Xik.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-SBYuaUD7.js";import"./useFocusable-BgBMU_CS.js";import"./RSPContexts-BNhmdufL.js";import"./Collection-xRwg1v5k.js";import"./CollectionBuilder-kvAQOu82.js";import"./SelectionIndicator-Wyz_1aA8.js";import"./Separator-Cl_cENZa.js";import"./browser-BVazs59Q.js";import"./useStatic-Bnfhfmst.js";import"./OverlayTrigger-Ce8vZdG2.js";import"./TableFooterRow-Dn-FDhfn.js";import"./SkeletonText-Ox4-vvjw.js";import"./Avatar-Cap9qVE3.js";import"./AvatarStack-CyBZbnmd.js";import"./Badge-DSWTM4Cn.js";import"./BigNumber-K7d08C_A.js";import"./Breadcrumb-CW32JSiJ.js";import"./Link-Cdb-IjP9.js";import"./Legend-DpHbpxDT.js";import"./Color-C3WK5Ehq.js";import"./Content-BaHGf9op.js";import"./Label-D60DkhLa.js";import"./ContextualHelpTrigger-Dzc-OR_f.js";import"./CounterBadge-DOY94Zrr.js";import"./DonutChart-B4Pw1gDt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fPCU1kmj.js";import"./Header-geqBE9py.js";import"./Image-mYPdxUVA.js";import"./Initials-C8rRxGXt.js";import"./InlineCode-DsrKBfEK.js";import"./PopoverTrigger-Bac14MEQ.js";import"./LoadingSpinner-CenMvatO.js";import"./Separator-C0rYsohv.js";import"./Message-_byUr7fM.js";import"./MessageSeparator-aISn9Nk9.js";import"./NavigationGroup-DCJQpVuq.js";import"./Notification-jgdKyHAO.js";import"./NotificationProvider-DV-TZjHG.js";import"./ProgressBar-CKu71Xlr.js";import"./Rating-D3r7O8dK.js";import"./Skeleton-K56s_bs8.js";import"./EmulatedBoldText-D5ywUyQZ.js";const{action:H}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=H("submit"),s={},a={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},m={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(B,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(d,{name:"file",onChange:n,children:e.jsx(g,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(d,{children:e.jsx(g,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(b,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
