import{j as r}from"./iframe-CvJspzLv.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BERZaob7.js";import{L as m}from"./Link-BOnIa3MC.js";import{H as s}from"./HeaderNavigation-EFVEgfKC.js";import{B as o}from"./Button-DPWvzJXv.js";import{T as p}from"./Text-QUQe3Lsq.js";import{I as h}from"./Image-CJzKlKdw.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-wY1Z7LlE.js";import{C as M,M as c}from"./MenuItem-CsQOqwrc.js";import{C as I}from"./ContextMenuTrigger-BbJJXI9D.js";import"./ContextMenuSection-B9VXHai8.js";import{a as T,M as k}from"./Modal-pga1h5YB.js";import{H}from"./Heading-Ex-YKDBU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./index-Df150GVy.js";import"./remote-BqqZGE8h.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./context-CQ77Qkvg.js";import"./utils-BL4G7l_u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DbFf9Ktc.js";import"./usePress-DO5nHrqL.js";import"./useFocusRing-L-b3Tn9K.js";import"./useFocusable-C5zGZvV-.js";import"./dynamic-7-1UCAS5.js";import"./LoadingSpinner-xAaU4yCn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpFh2ewL.js";import"./ProgressBar-CM3jPvpy.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./useLabel-DfL38sGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CBUTrPGa.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./AlertIcon-C15Ckg1B.js";import"./Action-CzgX1dLD.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./getActionGroupSlot-DdQssjpq.js";import"./Popover-62VnHh_D.js";import"./useOverlayController-BI0XpmO3.js";import"./OverlayContextProvider-BI-9o36W.js";import"./Dialog-CNj22GpD.js";import"./RSPContexts-fR-6qryz.js";import"./OverlayArrow-kevdZy7A.js";import"./useControlledState-DsktkqC9.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./Switch-CoKGarTH.js";import"./useFieldComponent-43Bszd6x.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BFwIgPNE.js";import"./useFormReset-ukaISav3.js";import"./OverlayTrigger-08hVypIJ.js";import"./DialogTriggerView-jOXw3rKI.js";import"./Overlay-mVIgeDGU.js";import"./ButtonView-ClFFq5XN.js";import"./Flex-DM-zaNTL.js";import"./ActionGroup-DsNPEUIc.js";import"./Content-CR9wDKeC.js";import"./Heading-BRBpvBMz.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Fr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Fr as __namedExportsOrder,zr as default};
