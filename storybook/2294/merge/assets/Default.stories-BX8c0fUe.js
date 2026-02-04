import{j as r}from"./iframe-Da9Lw8R_.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BYkwpstY.js";import{L as m}from"./Link-E8fc7JGi.js";import{H as s}from"./HeaderNavigation-CTwaCdH0.js";import{B as o}from"./Button-CkcTXATp.js";import{T as p}from"./Text-l_fYsQ08.js";import{I as h}from"./Image-Dj130f5M.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CJCYVAwA.js";import{C as M,M as c}from"./MenuItem-STdasGbK.js";import{C as I}from"./ContextMenuTrigger-DIoDWCy5.js";import"./ContextMenuSection-CnBpObAx.js";import{a as T,M as k}from"./Modal-DrF2CDPI.js";import{H}from"./Heading-p9-3Hmaq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./index-TT_JC2bB.js";import"./remote-CsFbcl9r.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./context-CsdpTyhd.js";import"./utils-Cwd4tFKX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BBVXnzgP.js";import"./usePress-BIogNAwh.js";import"./useFocusRing-BItT14i_.js";import"./useFocusable-CwPW854N.js";import"./dynamic-bM8H28Zu.js";import"./LoadingSpinner-DXGsR4uF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CzbwBi45.js";import"./ProgressBar-Chvpo8FD.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./useLabel-CzV-HlgB.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DDWH8I0V.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Text-CpGlsQu3.js";import"./AlertIcon-Co0MJDJf.js";import"./Action-CSMihAu4.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./Popover-FxFSsQeG.js";import"./useOverlayController-DXJN5Feb.js";import"./OverlayContextProvider-BnH0GpUl.js";import"./Dialog-Cw1z9AtQ.js";import"./RSPContexts-CqxOCNft.js";import"./OverlayArrow-Cf3S1QD1.js";import"./useControlledState-B4YxKAgg.js";import"./Collection-Gkv_ybXQ.js";import"./CollectionBuilder-uz1z8vZv.js";import"./SelectionIndicator-DjHwUAme.js";import"./Separator-VHKWzJTM.js";import"./SelectionManager-42CnKCgE.js";import"./useEvent-DSYhgwkh.js";import"./useCollator-D6vsHj3W.js";import"./FocusScope-BpnzFkst.js";import"./VisuallyHidden-gkajg-fe.js";import"./Switch-mGHee4dx.js";import"./useFieldComponent-yufHgNqa.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DQAe7dVS.js";import"./useFormReset-4DR8Px1h.js";import"./OverlayTrigger-BJ63rVtT.js";import"./DialogTriggerView-DjZOZzcH.js";import"./Overlay-BqAa2k8d.js";import"./ButtonView-C0Td427Q.js";import"./Flex-ZZsLBKn_.js";import"./ActionGroup-n4kQwCcc.js";import"./Content-kEzQxQz5.js";import"./Heading-CheJhR1R.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
