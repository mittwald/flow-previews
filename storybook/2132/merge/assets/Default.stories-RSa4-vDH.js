import{r as x,j as e}from"./iframe-7JAb-nDd.js";import{I as t,r as u}from"./TimeField-CNjMofKD.js";import{S as F}from"./Section--2nSNqYe.js";import{F as f,b as g}from"./FileCardList-CFeSPxGX.js";import{u as S,F as C,t as D}from"./Form-CTxPFoJk.js";import"./ResetButton-D7Dwgqv2.js";import{B as s}from"./Button-C274DNXY.js";import{A as y}from"./ActionGroup-BD30m3yb.js";import{_ as j,$ as b}from"./IconWarning-CrvOn5qf.js";import{H as h}from"./Heading-CHzNLXxT.js";import{T as O}from"./Text-Cjgg9Pe-.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-DI02RRNp.js";import"./mergeRefs-BqKaiHD8.js";import"./index-DRtDW0cb.js";import"./clsx-B-dksMZM.js";import"./utils-COcVuwM3.js";import"./Accordion-DYtLRAos.js";import"./dynamic-DAEQlq7s.js";import"./Alert-CLiUa977.js";import"./AlertIcon-WJ9tZl6s.js";import"./useLocalizedStringFormatter-BfdvS2qE.js";import"./context-DufoU_2Q.js";import"./AlertBadge-AOM4FSHZ.js";import"./Align-B0gCmpdf.js";import"./Popover-BcXGNCBW.js";import"./context-49irLi2e.js";import"./Button-CcXbzio8.js";import"./ProgressBar-CubXbo9-.js";import"./Hidden-CYq8ZFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-JM7xFBIR.js";import"./useFocusable-B5p2nlfO.js";import"./RSPContexts-BRgQDZZ1.js";import"./Collection-DakGPO9D.js";import"./CollectionBuilder-DcGhuBQx.js";import"./SelectionIndicator-Co1wtinQ.js";import"./Separator-DCxDEExt.js";import"./browser-ES8JYesh.js";import"./useStatic-BMWFl-h1.js";import"./OverlayTrigger-DS9RFxPY.js";import"./TableFooterRow-ZODofEH1.js";import"./SkeletonText-B9c0QkCc.js";import"./Avatar-6DFit7Ya.js";import"./AvatarStack-4AL_jxUF.js";import"./Badge-B1Y6ruys.js";import"./BigNumber-NgHYAh3A.js";import"./Breadcrumb-DOyzkWnN.js";import"./Link-Do3eIhQO.js";import"./Legend-CZxHGHa6.js";import"./Color-xIgWNHiv.js";import"./Content-Dg81XJRV.js";import"./Label-Cq-3tAPE.js";import"./ContextualHelpTrigger-7crKzglp.js";import"./CounterBadge-CLW5yjQ7.js";import"./DonutChart-C7E8doOb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIdJbZ8G.js";import"./Header-DkLINSGj.js";import"./Image-CFjkhrGB.js";import"./Initials-DCYS7rJh.js";import"./InlineCode-DdWzKy44.js";import"./PopoverTrigger-BiiRixsv.js";import"./LoadingSpinner-Ds95wBE7.js";import"./Separator-DvBTZY_D.js";import"./Message-jmWJmgsi.js";import"./MessageSeparator-dTBBbTVG.js";import"./NavigationGroup-BQQpe8Hu.js";import"./Notification-CAeZO54P.js";import"./NotificationProvider-Cquom2kb.js";import"./ProgressBar-CEJMgPBt.js";import"./Rating-Bg1reZHS.js";import"./Skeleton-DiJUmzB6.js";import"./getActionGroupSlot-o5MzPqMr.js";import"./EmulatedBoldText-DX6Otmj0.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
