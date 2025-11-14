import{r as x,j as e}from"./iframe-D4i-5dyB.js";import{I as t,r as u}from"./TimeField-CIDukiAs.js";import{S as F}from"./Section-B45bmdbE.js";import{F as f,b as g}from"./FileCardList-BQXii2c7.js";import{u as S,F as C,t as D}from"./Form-Cc_8wvEi.js";import"./ResetButton-D8XhYTLV.js";import{B as s}from"./Button-C5iEQf44.js";import{A as y}from"./ActionGroup-DfaF4Ihs.js";import{_ as j,$ as b}from"./IconWarning-CMFXnZAS.js";import{H as h}from"./Heading-CqgoaxDG.js";import{T as O}from"./Text-D-HEhYG-.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./clsx-B-dksMZM.js";import"./utils-BWp3lM8P.js";import"./Accordion-Dj0W5Sm2.js";import"./dynamic-l-Dsj5TR.js";import"./Alert-BxysIfVE.js";import"./AlertIcon-CoWnPqgJ.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./context-C76p02_s.js";import"./AlertBadge-BCJFFVr-.js";import"./Align-CocHRqnc.js";import"./Popover-DY1u_i9c.js";import"./context-JCcCR3kh.js";import"./Button-BNk2Wifn.js";import"./ProgressBar-B4smC8yo.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./RSPContexts-BOewTbeY.js";import"./Collection-E-HFRfBJ.js";import"./CollectionBuilder-C89H_4E6.js";import"./SelectionIndicator-BSmnnWZO.js";import"./Separator-BscBbSvj.js";import"./browser-Cwp7r97w.js";import"./useStatic-CrV_XbcB.js";import"./OverlayTrigger-D7YNoZK9.js";import"./TableFooterRow-BiDC_eis.js";import"./SkeletonText-BbzzKkxz.js";import"./Avatar-DYMDRQ8r.js";import"./AvatarStack-DbQ018zr.js";import"./Badge-DGIykoPb.js";import"./BigNumber-RSRBZBqi.js";import"./Breadcrumb-BFthghoN.js";import"./Link-BEGF2rB2.js";import"./Legend-KRzBJzCP.js";import"./Color-Bghgw0aE.js";import"./Content-BMj6l0HC.js";import"./Label-CEhfQve0.js";import"./ContextualHelpTrigger-BRqpivsA.js";import"./CounterBadge-BbpTGMEL.js";import"./DonutChart-BnHSOvbV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-x47jZjZe.js";import"./Header-1VErbdaO.js";import"./Image-BTNoRYQ7.js";import"./Initials-CFmamtSv.js";import"./InlineCode-DaIVko3u.js";import"./PopoverTrigger-CYaHO_51.js";import"./LoadingSpinner-DCo1rAvM.js";import"./Separator-D1GKViit.js";import"./Message-DJ9Qzwt8.js";import"./MessageSeparator-W1fEMKQv.js";import"./NavigationGroup-Di6mJdeB.js";import"./Notification-t1-j9nZN.js";import"./NotificationProvider-BqX1J7Mu.js";import"./ProgressBar-Def5jKMV.js";import"./Rating-DvqvLdBT.js";import"./Skeleton-B565HWGQ.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./EmulatedBoldText-wsap70PU.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(b,{}),e.jsx(h,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(F,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(h,{children:"Drop files"}),e.jsx(u,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(f,{children:[...i??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(F,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(h,{children:"Drop file"}),e.jsx(u,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(f,{children:[...i.watch("file")??[]].map(r=>e.jsx(g,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
