import{j as r}from"./iframe-DE21mSiE.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-iWnf9NI2.js";import{L as m}from"./Link-BcBqYxaR.js";import{H as s}from"./HeaderNavigation-Cl-RX3_0.js";import{B as o}from"./Button-DdcjdJkJ.js";import{T as p}from"./Text-DOdVur7X.js";import{I as B}from"./Image-DubVgoSY.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DtgQigga.js";import{C as y,M as c}from"./MenuItem-KpYygOgb.js";import{C as A}from"./ContextMenuTrigger-Jn8nyx15.js";import"./ContextMenuSection-CuNeUF_7.js";import{a as D,M as E}from"./Modal-Fyd-o2bm.js";import{H as G}from"./Heading-Ztm_X6Xu.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./index-ssZEpx-s.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./context-Br9w7yZh.js";import"./utils-DqYJbNsI.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Dv9orCJu.js";import"./useFocus-CRZNnr1R.js";import"./useFocusRing-pH6mNL0D.js";import"./useFocusable-AVRnrAkJ.js";import"./dynamic-BIsQA2QQ.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ProgressBar-ByrF5SpY.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BjU0tWvf.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./Text-CutbQTmF.js";import"./AlertIcon-4TNfreBd.js";import"./Action-CR9ahmpz.js";import"./context-6jqGW8Yr.js";import"./useStatic-Cbl6RHQu.js";import"./getActionGroupSlot-CKs13wvK.js";import"./Popover-DHByEabR.js";import"./useOverlayController-Fy6NErhC.js";import"./OverlayContextProvider-B008JOFK.js";import"./Dialog-CqjG3TV5.js";import"./RSPContexts-BtJsn2IM.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useControlledState-Bml9wY_-.js";import"./Collection-CtBmofMr.js";import"./CollectionBuilder-OPUz1gD2.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./Separator-BLbs5DM2.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./VisuallyHidden-pa5WzvsI.js";import"./ClearPropsContextView-DDfoOlOf.js";import"./Switch-DxxpyI87.js";import"./useMakeFocusable-BrvNHTGQ.js";import"./useToggleState-DHKihcTB.js";import"./useFormReset-BcRO7Ruj.js";import"./OverlayTrigger-DvrZWjw0.js";import"./ControlledNotification-BgQ4ySbx.js";import"./DialogTriggerView-DWxzmU-C.js";import"./Overlay-VwvmvCdQ.js";import"./ButtonView-DWvpe-5r.js";import"./Heading-b-A4WO83.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
