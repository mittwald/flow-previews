import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import"./IconApp-CsW6VVPl.js";import{k as B,l as H,g as S,m as v,n as C}from"./IconWarning-DAj50GX8.js";import{L as m}from"./Link-BTnLQo5W.js";import{H as s}from"./HeaderNavigation-V77kCsJB.js";import{B as o}from"./Button-Cx852dC8.js";import{T as p}from"./Text-CEm0ouz8.js";import{I as L}from"./Image-BF-H7TZN.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-BA_eSWpI.js";import{a as b,C as D,M as c}from"./ContextMenuContent-Bs_CnfSD.js";import"./ContextMenuSection-UKzWbej2.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./ModalTrigger-DZDp4EIi.js";import{H as W}from"./Heading-DvV74Kd2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DH4ScC2R.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./utils-CzVyYWZn.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DZCrAIzv.js";import"./useFocusRing-DzGSygZM.js";import"./useFocusable-CdO2YIL_.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Dhg1Wy_7.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-PTaPc_Ci.js";import"./react-children-utilities-fm2cgFnI.js";import"./Action-CYfAq6EL.js";import"./context-BHXZuMVa.js";import"./useStatic-Dg6j0jAA.js";import"./getActionGroupSlot-DBhwSc7c.js";import"./Popover-Bfm97Yqk.js";import"./MenuTrigger-dSDRANfB.js";import"./Dialog-BV8uMRwe.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./DialogTriggerView-DkRoBzAI.js";import"./Switch-CtEy4XjD.js";import"./Label-DZ85i_Qc.js";import"./useToggleState-B7W1plhv.js";import"./useFormReset-CilIRCFg.js";import"./Overlay-DTrl7g3C.js";import"./Header-Md_tjlF0.js";import"./ButtonView-DOZ2Wjci.js";import"./Heading-BCoG4c8D.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,$r as default};
